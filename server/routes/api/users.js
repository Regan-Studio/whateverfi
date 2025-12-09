
const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile, getUsers, getSystemStats, getPublicProfile, followUser, unfollowUser } = require('../../controllers/userController');
const { protect } = require('../../middleware/authMiddleware');
const { isAdmin } = require('../../middleware/roleMiddleware');

// Public Profile
router.get('/:id', getPublicProfile);

// Private User actions
router.route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);

router.post('/:id/follow', protect, followUser);
router.delete('/:id/follow', protect, unfollowUser);

// Admin Routes
router.get('/', protect, isAdmin, getUsers);
router.get('/stats', protect, isAdmin, getSystemStats);

module.exports = router;
