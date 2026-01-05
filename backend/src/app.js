const express = require('express');
const cors = require('cors');

const app = express(); // ✅ app MUST be first

/* ======================
   MIDDLEWARE
====================== */

// CORS
app.use(
  cors({
    origin: [
      'http://localhost:4200',
      'https://hrexpert01.netlify.app',
    ],
    credentials: true,
  })
);

// Body parser
app.use(express.json());

/* ======================
   ROUTES
====================== */

const authRoutes = require('./routes/auth.routes');
const clientRoutes = require('./routes/client.routes');
const employeeRoutes = require('./routes/employee.routes');
const attendanceRoutes = require('./routes/attendance.routes');

app.use('/api/auth', authRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/attendance', attendanceRoutes);

/* ======================
   HEALTH CHECK
====================== */
app.get('/', (req, res) => {
  res.send('HR Backend API is running 🚀');
});

module.exports = app;
