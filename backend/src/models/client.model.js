const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
      trim: true,
    },

    clientId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    companyCategory: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
    },

    address: String,
    country: String,
    state: String,
    district: String,
    pincode: String,

    gstNumber: String,

    companyAccountNumber: String,
    ifscCode: String,
    branch: String,

    remarks: String,

    status: {
      type: String,
      enum: ['ACTIVE', 'INACTIVE'],
      default: 'ACTIVE',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Client', clientSchema);
