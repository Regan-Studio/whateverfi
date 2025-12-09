
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    ideaId: { type: String, required: true }, // Linking to the Idea's custom ID (string), not ObjectId
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    authorName: { type: String, required: true }, // Cache name for easier display
    text: { type: String, required: true },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports = mongoose.model('Comment', CommentSchema);
