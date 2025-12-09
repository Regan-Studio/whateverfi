
const express = require('express');
const router = express.Router();

// @route   GET api/docs
// @desc    Get API documentation
// @access  Public
router.get('/', (req, res) => {
    const docs = {
        name: "whateverFi API",
        version: "1.0.0",
        endpoints: {
            auth: {
                "POST /api/auth/signup": "Register a new user",
                "POST /api/auth/login": "Login and receive JWT"
            },
            ideas: {
                "GET /api/ideas": "Fetch all ideas (supports filtering)",
                "POST /api/ideas": "Submit a new idea",
                "PUT /api/ideas/:id/vote": "Vote for an idea",
                "PUT /api/ideas/:id/bookmark": "Bookmark an idea",
                "POST /api/ideas/:id/join": "Join an idea team",
                "POST /api/ideas/:id/view": "Track a view"
            },
            ai: {
                "POST /api/ai/insight": "Generate SWOT analysis (Pro)",
                "POST /api/ai/roast": "Generate brutal critique (Pro)",
                "POST /api/ai/launch-plan": "Generate launch steps (Pro)",
                "POST /api/ai/generate": "Generate new ideas based on parameters"
            },
            users: {
                "GET /api/users/profile": "Get current user profile",
                "GET /api/users/:id": "Get public user profile"
            }
        }
    };
    res.json(docs);
});

module.exports = router;
