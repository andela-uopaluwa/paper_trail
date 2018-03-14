const mongoose = require('mongoose');
const Expense = require('../models/Expense');

exports.home = (req, res) => {
  res.send('WHEELS UP 🔥 🔥 🔥!!!');
};

exports.createExpense = async (req, res) => {
  const expense = await (new Expense(req.body)).save();
  res.json(expense);
};

exports.getExpenses = async (req, res) => {
  const expenses = await Expense.find().limit(10);
  res.json(expenses);
};

exports.updateExpense = async (req, res) => {
  const expense = await Expense.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true
  }).exec();
  res.json(expense);
};

exports.deleteExpense = async (req, res) => {
// TODO: only initiator can delete expense
  const expense = await Expense.findByIdAndRemove(req.params.id);
  res.json({ msg: 'Succesfully deleted', deleted: expense });
};
// TODO: handle error/failures in methods
