// models/EmailLogModel.js
const mongoose = require('mongoose');

const EmailLogSchema = new mongoose.Schema({
  to: { type: String, required: true },
  subject: { type: String, required: true },
  text: { type: String, required: true },
  sentAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('EmailLog', EmailLogSchema);
