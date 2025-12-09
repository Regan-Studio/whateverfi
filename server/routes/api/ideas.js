
const express = require('express');
const router = express.Router();
const { getIdeas, createIdea, voteOnIdea, bookmarkIdea, joinTeam, updateStatus, getUserDashboard, trackView, getSimilarIdeas } = require('../../controllers/ideaController');
const { protect, requireAuth } = require('../../middleware/authMiddleware');

// Public / Hybrid
router.get('/', protect, getIdeas);
router.get('/:id/similar', getSimilarIdeas);
router.post('/:id/view', trackView);

// Protected Actions
router.post('/', protect, requireAuth, createIdea);
router.put('/:id/vote', protect, requireAuth, voteOnIdea);
router.put('/:id/bookmark', protect, requireAuth, bookmarkIdea);

// Team & Status
router.post('/:id/join', protect, requireAuth, joinTeam);
router.put('/:id/status', protect, requireAuth, updateStatus);

// User Dashboard
router.get('/dashboard', protect, requireAuth, getUserDashboard);

module.exports = router;
