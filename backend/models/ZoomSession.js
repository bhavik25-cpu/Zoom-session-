const mongoose = require('mongoose');

const ZoomSessionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true }
});

module.exports = mongoose.model('ZoomSession', ZoomSessionSchema);
