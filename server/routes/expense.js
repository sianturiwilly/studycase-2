const expenseRoute = require('express').Router();
const ExpenseController = require('../controllers/ExpenseController');

expenseRoute.get('/', ExpenseController.getExpenses);
expenseRoute.post('/', ExpenseController.add);
expenseRoute.delete('/', ExpenseController.delete);
expenseRoute.put('/', ExpenseController.update);

module.exports = expenseRoute;