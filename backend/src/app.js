const express = require('express');
const cors = require('cors');

// Routes
const authRoutes = require('./routes/auth.routes');
const clientRoutes = require('./routes/client.routes');
const employeeRoutes = require('./routes/employee.routes');
const attendanceRoutes = require('./routes/attendance.routes');

app.use('/api/attendance', attendanceRoutes);

const app = express();

/* ======================
   MIDDLEWARE
====================== */

// CORS – allow frontend
app.use(
  cors({
    origin: [
      'http://localhost:4200',
        'https://hrexpert01.netlify.app'
    ],
    credentials: true,
  })
);

// Body parser
app.use(express.json());

/* ======================
   ROUTES
====================== */

app.use('/api/auth', authRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/employees', employeeRoutes);

/* ======================
   HEALTH CHECK (OPTIONAL)
====================== */
app.get('/', (req, res) => {
  res.send('HR Backend API is running 🚀');
});

module.exports = app;
