const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  nameActive: { type: Number, default: 0 },
  publish:Number,
  nameRequired: { type: Number, default: 0 },
  emailActive: { type: Number, default: 0 },
  emailRequired: { type: Number, default: 0 },
});

const newsletterModel = mongoose.model('newsletterData', newsletterSchema);

module.exports = newsletterModel;
