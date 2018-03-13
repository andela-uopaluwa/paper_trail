const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

//Expense

router.get('/', expenseController.home);
router.post('/api/expense', expenseController.addExpense);

module.exports = router;
