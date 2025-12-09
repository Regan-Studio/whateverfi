
const express = require('express');
const router = express.Router();
const { upgradeToPro } = require('../../controllers/paymentController');
const { protect } = require('../../middleware/authMiddleware');

router.post('/upgrade', protect, upgradeToPro);

module.exports = router;
