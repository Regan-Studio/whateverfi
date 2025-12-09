
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IdeaSchema = new Schema({
    id: { type: String, required: true, unique: true },
    author: { type: Schema.Types.ObjectId, ref: 'User' }, // The creator
    day: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    fullContent: { type: String },
    problem: { type: String },
    solution: { type: String },
    targetAudience: { type: String },
    region: { type: String },
    tags: [{ type: String }],
    category: { type: String, required: true },
    voters: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    views: { type: Number, default: 0 }, // View tracking
    date: { type: String, required: true },
    difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
    techStack: [{ type: String }],
    status: { type: String, enum: ['Open', 'Building', 'Shipped'], default: 'Open' },
    comments: [{
        author: String,
        text: String,
        date: Date,
    }],
    // Team Building
    teamMembers: [{
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        role: { type: String, enum: ['Developer', 'Designer', 'Marketer', 'Founder'], default: 'Developer' },
        joinedAt: { type: Date, default: Date.now }
    }],
    trendMetrics: {
        keyword: String,
        volume: Number,
        growth: Number,
        history: [Number]
    },
    marketAnalysis: {
        tam: String,
        targetSegment: String,
        revenuePotential: String,
        marketGrowth: String,
        painSeverity: Number,
        competitors: [{
            name: String,
            website: String,
            description: String
        }]
    },
    solutionType: String,
    marketType: String,
    
}, { 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

IdeaSchema.virtual('voteCount').get(function() {
    return this.voters ? this.voters.length : 0;
});

module.exports = mongoose.model('Idea', IdeaSchema);
