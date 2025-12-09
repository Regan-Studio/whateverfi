
const User = require('../models/User');
const Idea = require('../models/Idea');
const bcrypt = require('bcryptjs');

// @desc    Get user profile (Private)
// @route   GET /api/users/profile
// @access  Private
exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Update user profile (Private)
// @route   PUT /api/users/profile
// @access  Private
exports.updateUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (user) {
            user.email = req.body.email || user.email;
            if (req.body.password) {
                user.password = req.body.password;
            }
            if (req.body.bio) user.bio = req.body.bio;
            if (req.body.website) user.website = req.body.website;

            const updatedUser = await user.save();

            res.json({
                _id: updatedUser._id,
                email: updatedUser.email,
                plan: updatedUser.plan,
                role: updatedUser.role,
                aiCreditsUsed: updatedUser.aiCreditsUsed,
                reputation: updatedUser.reputation
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get Public Profile
// @route   GET /api/users/:id
// @access  Public
exports.getPublicProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
            .select('-password -email -plan -aiCreditsUsed -bookmarkedIdeas')
            .populate('submittedIdeas', 'title description category votes status');

        if (!user) return res.status(404).json({ message: 'User not found' });

        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Follow a user
// @route   POST /api/users/:id/follow
// @access  Private
exports.followUser = async (req, res) => {
    try {
        const userToFollow = await User.findById(req.params.id);
        const currentUser = await User.findById(req.user._id);

        if (!userToFollow || !currentUser) return res.status(404).json({ message: 'User not found' });
        if (req.params.id === req.user._id.toString()) return res.status(400).json({ message: 'Cannot follow self' });

        if (!userToFollow.followers.includes(req.user._id)) {
            userToFollow.followers.push(req.user._id);
            currentUser.following.push(req.params.id);
            await userToFollow.save();
            await currentUser.save();
            
            // Reputation boost for being followed
            userToFollow.reputation += 10;
            await userToFollow.save();
        }

        res.json({ message: 'Followed successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Unfollow a user
// @route   DELETE /api/users/:id/follow
// @access  Private
exports.unfollowUser = async (req, res) => {
    try {
        const userToUnfollow = await User.findById(req.params.id);
        const currentUser = await User.findById(req.user._id);

        if (!userToUnfollow || !currentUser) return res.status(404).json({ message: 'User not found' });

        userToUnfollow.followers = userToUnfollow.followers.filter(id => id.toString() !== req.user._id.toString());
        currentUser.following = currentUser.following.filter(id => id.toString() !== req.params.id);

        await userToUnfollow.save();
        await currentUser.save();

        res.json({ message: 'Unfollowed successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get all users (Admin)
// @route   GET /api/users
// @access  Private/Admin
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({}).select('-password').sort({ createdAt: -1 });
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get system stats (Admin)
// @route   GET /api/users/stats
// @access  Private/Admin
exports.getSystemStats = async (req, res) => {
    try {
        const userCount = await User.countDocuments();
        const ideaCount = await Idea.countDocuments();
        const proCount = await User.countDocuments({ plan: 'pro' });
        
        res.json({
            userCount,
            ideaCount,
            proCount
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
