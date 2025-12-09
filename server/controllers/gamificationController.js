
const User = require('../models/User');

exports.getLeaderboard = async (req, res) => {
    try {
        const topUsers = await User.find({})
            .sort({ reputation: -1 })
            .limit(10)
            .select('email bio reputation badges avatar');
        
        // Mask emails for privacy
        const sanitized = topUsers.map(u => ({
            id: u._id,
            name: u.email.split('@')[0], // Use part of email as display name if name missing
            reputation: u.reputation,
            badges: u.badges,
            avatar: u.avatar
        }));

        res.json(sanitized);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.awardBadge = async (userId, badgeName, icon, description) => {
    try {
        const user = await User.findById(userId);
        if (!user) return;

        // Check if already has badge
        if (user.badges.some(b => b.name === badgeName)) return;

        user.badges.push({ name: badgeName, icon, description });
        await user.save();
    } catch (err) {
        console.error("Badge award error", err);
    }
};
