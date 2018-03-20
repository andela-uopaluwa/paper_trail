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

exports.deleteIncome = async (req, res) => {
  // TODO: only initiator can delete income
  const income = await Income.findByIdAndRemove(req.params.id);
  res.json({ msg: 'Succesfully deleted', deleted: income });
};

exports.updateIncome = async (req, res) => {
  const income = await( Income.findOneAndUpdate({_id: req.params.id}, req.body, {
    new: true,
    runValidators: true
  })).exec();
  res.json(income);
};
