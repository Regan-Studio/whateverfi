
const aiService = require('../services/geminiService');
const User = require('../models/User');

const incrementUsage = async (userId) => {
    await User.findByIdAndUpdate(userId, { $inc: { aiCreditsUsed: 1 } });
};

exports.getInsight = async (req, res) => {
    try {
        const { title, description } = req.body;
        const result = await aiService.generateInsight(title, description);
        await incrementUsage(req.user._id);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('AI Service Error');
    }
};

exports.getRoast = async (req, res) => {
    try {
        const { title, description } = req.body;
        const result = await aiService.generateRoast(title, description);
        await incrementUsage(req.user._id);
        res.json({ roast: result });
    } catch (err) {
        console.error(err);
        res.status(500).send('AI Service Error');
    }
};

exports.getLaunchPlan = async (req, res) => {
    try {
        const { title, description } = req.body;
        const result = await aiService.generateLaunchPlan(title, description);
        await incrementUsage(req.user._id);
        res.json({ plan: result });
    } catch (err) {
        console.error(err);
        res.status(500).send('AI Service Error');
    }
};

exports.generateIdeas = async (req, res) => {
    try {
        const params = req.body;
        const result = await aiService.generateNewIdeas(params);
        await incrementUsage(req.user._id);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('AI Service Error');
    }
};
