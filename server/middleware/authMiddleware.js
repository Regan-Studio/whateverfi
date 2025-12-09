
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            // If token is invalid, we'll proceed without a user attached to the request.
            // This allows public access to the route.
            console.error('Token verification failed:', error.message);
            req.user = null;
            next();
        }
    } else {
        // No token provided
        req.user = null;
        next();
    }
};

const requireAuth = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.status(401).json({ message: 'Not authorized, no token or token failed' });
    }
};


module.exports = { protect, requireAuth };
