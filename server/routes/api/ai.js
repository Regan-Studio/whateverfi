
const express = require('express');
const router = express.Router();
const { getInsight, getRoast, getLaunchPlan, generateIdeas } = require('../../controllers/aiController');
const { protect } = require('../../middleware/authMiddleware');
const { checkCreditLimit } = require('../../middleware/subscriptionMiddleware');

// All AI routes are protected and metered
router.post('/insight', protect, checkCreditLimit, getInsight);
router.post('/roast', protect, checkCreditLimit, getRoast);
router.post('/launch-plan', protect, checkCreditLimit, getLaunchPlan);
router.post('/generate', protect, checkCreditLimit, generateIdeas);

module.exports = router;
