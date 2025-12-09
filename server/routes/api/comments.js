
const express = require('express');
const router = express.Router();
const Comment = require('../../models/Comment');
const User = require('../../models/User');
const { protect } = require('../../middleware/authMiddleware');

// @route   GET api/comments/:ideaId
// @desc    Get comments for an idea
// @access  Public
router.get('/:ideaId', async (req, res) => {
    try {
        const comments = await Comment.find({ ideaId: req.params.ideaId }).sort({ createdAt: -1 });
        res.json(comments);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   POST api/comments/:ideaId
// @desc    Add a comment
// @access  Private
router.post('/:ideaId', protect, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const newComment = new Comment({
            ideaId: req.params.ideaId,
            user: req.user.id,
            authorName: user.email.split('@')[0], // Simple username derivation
            text: req.body.text
        });

        const comment = await newComment.save();
        res.json(comment);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
