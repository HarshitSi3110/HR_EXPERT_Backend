const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    designation: {
      type: String,
      required: true
    },
    department: {
      type: String
    },
    joiningDate: {
      type: Date,
      default: Date.now
    },
    status: {
      type: String,
      enum: ['ACTIVE', 'INACTIVE'],
      default: 'ACTIVE'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Employee', employeeSchema);
