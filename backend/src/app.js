const express = require('express');
const cors = require('cors');

const employeeRoutes = require('./routes/employee.routes');
const authRoutes = require('./routes/auth.routes'); // ✅ FIX

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/employees', employeeRoutes);
app.use('/api/auth', authRoutes); // now this works

module.exports = app;
