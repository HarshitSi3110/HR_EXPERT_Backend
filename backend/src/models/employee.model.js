const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    designation: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ['ACTIVE', 'INACTIVE'],
      default: 'ACTIVE',
    },

    gender: {
      type: String,
      enum: ['MALE', 'FEMALE', 'OTHER'],
    },

    dateOfBirth: Date,
    dateOfJoining: Date,

    fatherOrHusbandName: String,

    relation: {
      type: String,
      enum: ['FATHER', 'HUSBAND'],
    },

    maritalStatus: {
      type: String,
      enum: ['SINGLE', 'MARRIED'],
    },

    mobilePrimary: {
      type: String,
      required: true,
    },

    mobileSecondary: String,

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    address: String,

    qualification: String,
    specialization: String,

    aadhar: String,
    pan: String,
    nameAsPerPan: String,

    bankName: String,
    bankAccountNumber: String,
    ifscCode: String,

    uan: {
      type: String,
    },

    pfEnabled: {
      type: Boolean,
      default: false,
    },

    onProbation: {
      type: Boolean,
      default: false,
    },

    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client',
    },

    yearlyCtc: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Employee', employeeSchema);
