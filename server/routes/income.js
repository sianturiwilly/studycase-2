const incomeRoute = require('express').Router();
const IncomeController = require('../controllers/IncomeController');

incomeRoute.get('/', IncomeController.getIncomes);
incomeRoute.post('/', IncomeController.add);
incomeRoute.delete('/', IncomeController.delete);
incomeRoute.put('/', IncomeController.update);

module.exports = incomeRoute;