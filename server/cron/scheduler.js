
const cron = require('node-cron');
const logger = require('../config/logger');
const Idea = require('../models/Idea');
const User = require('../models/User');

const init = () => {
    logger.info('Initializing Cron Jobs...');

    // 1. Calculate Trending Scores (Every hour)
    cron.schedule('0 * * * *', async () => {
        logger.info('CRON: Calculating Trending Scores');
        try {
            // Decay older votes, boost recent views/comments
            // In a real app, this would be more complex math.
            // For now, we simulate activity updates.
            const ideas = await Idea.find({});
            for (const idea of ideas) {
                // Simple algorithm
                const voteCount = idea.voters.length;
                const viewCount = idea.views || 0;
                // Add logic here if we had a specific 'trendScore' field
                // For now just logging as a placeholder for the logic
            }
        } catch (err) {
            logger.error('CRON Error: Trending Calc', err);
        }
    });

    // 2. Weekly Digest Email Simulation (Every Monday at 9am)
    cron.schedule('0 9 * * 1', async () => {
        logger.info('CRON: Sending Weekly Digest');
        try {
            const users = await User.find({ subscriptionStatus: 'active' });
            logger.info(`Sending digest to ${users.length} active users...`);
            // Email sending logic would go here
        } catch (err) {
            logger.error('CRON Error: Weekly Digest', err);
        }
    });
};

module.exports = { init };
