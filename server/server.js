
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const connectDB = require('./config/db');
const ideaRoutes = require('./routes/api/ideas');
const authRoutes = require('./routes/api/auth');
const aiRoutes = require('./routes/api/ai');
const commentRoutes = require('./routes/api/comments');
const paymentRoutes = require('./routes/api/payment');
const userRoutes = require('./routes/api/users');
const gamificationRoutes = require('./routes/api/gamification');
const { errorHandler } = require('./middleware/errorMiddleware');
const { apiLimiter } = require('./middleware/rateLimitMiddleware');
const logger = require('./config/logger');
const scheduler = require('./cron/scheduler');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(helmet());
app.use(cors());
app.use(compression()); // Compress all responses
app.use(express.json({ extended: false }));
app.use(mongoSanitize());

// Request logging
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Rate Limiting (Apply to all requests)
app.use('/api', apiLimiter);

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/ideas', ideaRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/users', userRoutes);
app.use('/api/gamification', gamificationRoutes);
app.use('/api/docs', require('./routes/api/docs'));

// Error Handling
app.use(errorHandler);

// Start Background Jobs
scheduler.init();

const PORT = process.env.PORT || 5000;

if (require.main === module) {
  app.listen(PORT, () => logger.info(`Server started on port ${PORT}`));
}

module.exports = app;
