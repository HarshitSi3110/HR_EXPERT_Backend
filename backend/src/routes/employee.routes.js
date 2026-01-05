const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee.controller');

// CREATE
router.post('/', employeeController.createEmployee);

// READ
router.get('/', employeeController.getEmployees);

// ⭐ MUST BE BEFORE :id
router.get(
  '/by-client/:clientId',
  employeeController.getEmployeesByClient
);

router.get('/:id', employeeController.getEmployeeById);

// UPDATE
router.put('/:id', employeeController.updateEmployee);

// DELETE
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;
