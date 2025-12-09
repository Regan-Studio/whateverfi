
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true
    },
    // Profile
    name: { type: String },
    bio: { type: String, maxlength: 500 },
    website: { type: String },
    avatar: { type: String }, // URL
    
    // Social Graph
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],

    bookmarkedIdeas: [{
        type: String, // Storing the idea's unique string ID
        ref: 'Idea'
    }],
    
    // Subscription & Usage Fields
    plan: {
        type: String,
        enum: ['free', 'pro'],
        default: 'free'
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    subscriptionStatus: {
        type: String,
        enum: ['active', 'inactive', 'canceled'],
        default: 'active'
    },
    aiCreditsUsed: {
        type: Number,
        default: 0
    },

    // Gamification
    reputation: { type: Number, default: 0 },
    badges: [{
        name: String,
        icon: String, // lucide icon name
        date: { type: Date, default: Date.now },
        description: String
    }]

}, { 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true } 
});

// Virtual for submitted ideas
UserSchema.virtual('submittedIdeas', {
    ref: 'Idea',
    localField: '_id',
    foreignField: 'author'
});

// Pre-save hook to hash password before saving
UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Method to compare passwords
UserSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
