
const Idea = require('../models/Idea');
const User = require('../models/User');
const cache = require('../utils/cache');

exports.getIdeas = async (req, res) => {
    try {
        // Cache key based on query params
        const cacheKey = `ideas_${JSON.stringify(req.query)}`;
        const cachedData = cache.get(cacheKey);
        
        // Skip cache if we need auth context heavily, or just rely on augment later. 
        // For broad public queries, cache is good.
        if (cachedData && !req.user) { 
             return res.json(cachedData);
        }

        let sortQuery = { day: -1 };
        let filterQuery = {};

        // Filtering
        if (req.query.category && req.query.category !== 'All') {
            filterQuery.category = req.query.category;
        }
        if (req.query.difficulty && req.query.difficulty !== 'All') {
            filterQuery.difficulty = req.query.difficulty;
        }
        if (req.query.tags) {
            const tags = req.query.tags.split(',');
            filterQuery.tags = { $in: tags };
        }
        
        // Sorting
        if (req.query.sort === 'trending') {
             // Aggregation for dynamic sorting
             const ideas = await Idea.aggregate([
                { $match: filterQuery },
                {
                    $addFields: {
                        voteCount: { $size: "$voters" },
                        // Simple trending score: votes + (views/10)
                        trendScore: { $add: [{ $size: "$voters" }, { $divide: ["$views", 10] }] } 
                    }
                },
                { $sort: { trendScore: -1 } }
            ]);
            const augmented = await this.augmentIdeas(ideas, req.user);
            if (!req.user) cache.set(cacheKey, augmented);
            return res.json(augmented);
        } else if (req.query.sort === 'views') {
            sortQuery = { views: -1 };
        }

        const ideas = await Idea.find(filterQuery).sort(sortQuery).lean();
        const augmented = await this.augmentIdeas(ideas, req.user);
        
        if (!req.user) cache.set(cacheKey, augmented);
        res.json(augmented);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Helper to add user-specific flags
exports.augmentIdeas = async (ideas, user) => {
    if (!user) {
         return ideas.map(idea => ({
            ...idea,
            votes: idea.voters ? idea.voters.length : (idea.voteCount || 0),
            isVoted: false,
            isBookmarked: false,
            teamCount: idea.teamMembers ? idea.teamMembers.length : 0
        }));
    }

    const dbUser = await User.findById(user.id);
    const bookmarkedIds = new Set(dbUser.bookmarkedIdeas.map(id => id.toString()));

    return ideas.map(idea => {
        const voters = idea.voters || [];
        const teamMembers = idea.teamMembers || [];
        
        return {
            ...idea,
            votes: voters.length, 
            isVoted: voters.some(voterId => voterId.toString() === user.id),
            isBookmarked: bookmarkedIds.has(idea.id),
            teamCount: teamMembers.length,
            isJoined: teamMembers.some(member => member.user.toString() === user.id)
        };
    });
};

exports.createIdea = async (req, res) => {
    try {
        const maxDayIdea = await Idea.findOne().sort({ day: -1 });
        const nextDay = maxDayIdea ? maxDayIdea.day + 1 : 1;

        const newIdea = new Idea({
            ...req.body,
            id: `idea-${Date.now()}`,
            day: nextDay,
            author: req.user.id,
            voters: [],
            teamMembers: [{ user: req.user.id, role: 'Founder' }]
        });

        const idea = await newIdea.save();
        
        // Add to user's reputation for contributing
        await User.findByIdAndUpdate(req.user.id, { $inc: { reputation: 20 } });
        
        cache.flush(); // Clear cache on new content
        res.json(idea);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.voteOnIdea = async (req, res) => {
    try {
        const idea = await Idea.findOne({ id: req.params.id });
        if (!idea) return res.status(404).json({ msg: 'Idea not found' });

        const userId = req.user._id;
        const voterIndex = idea.voters.findIndex(voterId => voterId.equals(userId));

        if (voterIndex > -1) {
            idea.voters.splice(voterIndex, 1);
        } else {
            idea.voters.push(userId);
            // Award reputation to author (if not self vote)
            if (idea.author && idea.author.toString() !== userId.toString()) {
                await User.findByIdAndUpdate(idea.author, { $inc: { reputation: 5 } });
            }
        }

        await idea.save();
        res.json({ votes: idea.voters.length, isVoted: voterIndex === -1 });
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.bookmarkIdea = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const ideaId = req.params.id;
        
        const bookmarkIndex = user.bookmarkedIdeas.indexOf(ideaId);

        if (bookmarkIndex > -1) {
            user.bookmarkedIdeas.splice(bookmarkIndex, 1);
        } else {
            user.bookmarkedIdeas.push(ideaId);
        }

        await user.save();
        res.json({ isBookmarked: bookmarkIndex === -1 });
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.joinTeam = async (req, res) => {
    try {
        const idea = await Idea.findOne({ id: req.params.id });
        if (!idea) return res.status(404).json({ msg: 'Idea not found' });

        const { role } = req.body;
        const userId = req.user._id;

        const existingMember = idea.teamMembers.find(m => m.user.equals(userId));
        if (existingMember) {
            return res.status(400).json({ msg: 'Already a team member' });
        }

        idea.teamMembers.push({ user: userId, role });
        
        if (idea.status === 'Open') {
            idea.status = 'Building';
        }

        await idea.save();
        res.json({ 
            teamMembers: idea.teamMembers,
            status: idea.status,
            msg: `Joined as ${role}`
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.updateStatus = async (req, res) => {
    try {
        const idea = await Idea.findOne({ id: req.params.id });
        if (!idea) return res.status(404).json({ msg: 'Idea not found' });
        
        const { status } = req.body;
        idea.status = status;
        await idea.save();
        
        res.json({ status: idea.status });
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.getUserDashboard = async (req, res) => {
    try {
        const userId = req.user._id;
        const created = await Idea.find({ author: userId }).sort({ createdAt: -1 });
        const joined = await Idea.find({ 'teamMembers.user': userId, author: { $ne: userId } });
        const user = await User.findById(userId);
        const bookmarked = await Idea.find({ id: { $in: user.bookmarkedIdeas } });

        res.json({
            created: await this.augmentIdeas(created, req.user),
            joined: await this.augmentIdeas(joined, req.user),
            bookmarked: await this.augmentIdeas(bookmarked, req.user),
            user: {
                email: user.email,
                id: user._id,
                reputation: user.reputation,
                badges: user.badges
            }
        });

    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.trackView = async (req, res) => {
    try {
        const idea = await Idea.findOne({ id: req.params.id });
        if (idea) {
            idea.views = (idea.views || 0) + 1;
            await idea.save();
        }
        res.status(200).send();
    } catch (err) {
        // Silent fail for analytics
        res.status(200).send();
    }
};

exports.getSimilarIdeas = async (req, res) => {
    try {
        const idea = await Idea.findOne({ id: req.params.id });
        if (!idea) return res.status(404).json({ msg: 'Idea not found' });
        
        // Find ideas with same category or shared tags, excluding self
        const similar = await Idea.find({
            id: { $ne: idea.id },
            $or: [
                { category: idea.category },
                { tags: { $in: idea.tags } }
            ]
        }).limit(3);
        
        res.json(similar);
    } catch (err) {
        res.status(500).send("Server Error");
    }
};
