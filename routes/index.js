const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

//Expense

router.get('/', expenseController.home);
router.get('/expenses', expenseController.getExpenses);
router.post('/api/expense', expenseController.createExpense);
router.post('/api/expense/:id', expenseController.updateExpense);
router.delete('/api/expense/:id', expenseController.deleteExpense);

module.exports = router;
