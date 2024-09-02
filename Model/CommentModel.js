const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  comments: { type: String, required: true },
 
}, { timestamps: true });

module.exports = mongoose.model('CommentModel', commentSchema);
