
const User = require('../models/User');

// @desc    Simulate upgrading to Pro plan
// @route   POST /api/payment/upgrade
// @access  Private
exports.upgradeToPro = async (req, res) => {
    try {
        // In a real app, this would verify a Stripe session/webhook
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.plan = 'pro';
        user.subscriptionStatus = 'active';
        // Optionally reset credits or keep tracking total lifetime usage
        
        await user.save();

        res.json({
            success: true,
            message: 'Upgraded to Pro successfully',
            user: {
                id: user._id,
                email: user.email,
                plan: user.plan,
                aiCreditsUsed: user.aiCreditsUsed
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Payment Error');
    }
};
