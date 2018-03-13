const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const expenseSchema = new mongoose.Schema({
  amount: {
    type: Number,
    min: 0,
    required: 'Amount greater >= 0 is required',
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
  },
  description: String,
  created: {
    type: Date,
    default: Date.now,
  },
  initiator: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Expense', expenseSchema);
