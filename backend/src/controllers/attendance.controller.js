const Attendance = require('../models/attendance.model');

exports.markAttendance = async (req, res) => {
  try {
    const { date, clientId, records } = req.body;

    const bulkOps = records.map((r) => ({
      updateOne: {
        filter: {
          date: new Date(date),
          employee: r.employeeId,
        },
        update: {
          $set: {
            status: r.status,
            client: clientId,
          },
        },
        upsert: true,
      },
    }));

    await Attendance.bulkWrite(bulkOps);

    res.status(200).json({
      message: 'Attendance marked successfully',
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
