const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const incomeSchema = new mongoose.Schema({
  amount: {
    type: Number,
    min: 0,
    required: 'Amount greater >= 0 is required'
  },
  created: {
    type: Date,
    default: Date.now,
  },
  description: String,
  initiator: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  source: String
});

module.exports = mongoose.model('Income', incomeSchema);
