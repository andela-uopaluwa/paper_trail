const mongoose = require('mongoose');
const Income = require('../models/Income');

exports.addIncome = async (req, res) => {
  const income = await (new Income(req.body)).save();
  res.json(income);
}
