const mongoose = require('mongoose');
const Expense = require('../models/Expense');

exports.home = (req, res) => {
  res.send('WHEELS UP 🔥 🔥 🔥!!!');
};

exports.addExpense = async (req, res) => {
	const expense = await (new Expense(req.body)).save();
	res.json(expense);
};
