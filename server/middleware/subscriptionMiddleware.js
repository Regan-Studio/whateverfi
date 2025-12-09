
const User = require('../models/User');

const FREE_TIER_LIMIT = 5; // Free users get 5 AI generations

const checkCreditLimit = async (req, res, next) => {
    try {
        // If no user (should be protected by auth middleware anyway), deny
        if (!req.user) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        // Fetch fresh user data to ensure credit count is up to date
        const user = await User.findById(req.user._id);

        if (user.plan === 'pro') {
            // Pro users have unlimited access
            return next();
        }

        if (user.aiCreditsUsed >= FREE_TIER_LIMIT) {
            return res.status(403).json({ 
                message: 'Free limit reached', 
                code: 'LIMIT_REACHED',
                limit: FREE_TIER_LIMIT 
            });
        }

        next();
    } catch (error) {
        console.error("Credit check error:", error);
        res.status(500).json({ message: 'Server error checking credits' });
    }
};

const requirePro = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Not authorized' });
        }
        
        const user = await User.findById(req.user._id);

        if (user.plan !== 'pro') {
            return res.status(403).json({ 
                message: 'Pro subscription required',
                code: 'PRO_REQUIRED'
            });
        }

        next();
    } catch (error) {
        res.status(500).json({ message: 'Server error checking subscription' });
    }
};

module.exports = { checkCreditLimit, requirePro };
