const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAt) => new Date(createdAt).toISOString(),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema], 
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;