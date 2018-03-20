const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');
const incomeController = require('../controllers/incomeController');

//Expense

router.get('/', expenseController.home);
router.get('/expenses', expenseController.getExpenses);
router.post('/api/expense', expenseController.createExpense);
router.post('/api/expense/:id', expenseController.updateExpense);
router.delete('/api/expense/:id', expenseController.deleteExpense);

//Income
router.post('/api/income', incomeController.addIncome);
router.get('/income', incomeController.getIncome);
router.delete('/income/:id', incomeController.deleteIncome);
router.post('/api/income/:id', incomeController.updateIncome);


module.exports = router;
