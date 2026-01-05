const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },

    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client',
      required: true,
    },

    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',
      required: true,
    },

    status: {
      type: String,
      enum: ['PRESENT', 'ABSENT'],
      default: 'ABSENT',
    },

    markedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }
  },
  { timestamps: true }
);

// 🔥 Prevent duplicate attendance for same day
attendanceSchema.index(
  { date: 1, employee: 1 },
  { unique: true }
);

module.exports = mongoose.model('Attendance', attendanceSchema);
