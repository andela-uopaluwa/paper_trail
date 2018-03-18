const mongoose = require('mongoose');
const Income = require('../models/Income');

exports.addIncome = async (req, res) => {
  const income = await (new Income(req.body)).save();
  res.json(income);
};

exports.getIncome = async (req, res) => {
  const income = await Income.find();
  res.json(income);
};
