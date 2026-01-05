const Employee = require('../models/employee.model');
const Client = require('../models/client.model');
/* ======================
   CREATE EMPLOYEE
====================== */
exports.createEmployee = async (req, res) => {
  try {
    const body = req.body;

    let clientObjectId = null;

    if (body.clientId) {
      const client = await Client.findById(body.clientId);

      if (!client) {
        return res.status(400).json({
          message: 'Client not found. Please select a valid client.',
        });
      }

      clientObjectId = client._id;
    }

    const employee = await Employee.create({
      employeeId: body.employeeId,
      name: body.name,
      email: body.email,
      designation: body.designation,
      status: body.status?.toUpperCase(),

      gender: body.gender?.toUpperCase(),
      relation: body.relation?.toUpperCase(),
      maritalStatus: body.maritalStatus?.toUpperCase(),

      dateOfBirth: body.dob,
      dateOfJoining: body.doj,

      fatherOrHusbandName: body.guardianName,

      mobilePrimary: body.mobilePrimary,
      mobileSecondary: body.mobileSecondary,

      address: body.address,
      qualification: body.qualification,
      specialization: body.specialization,

      aadhar: body.aadhar,
      pan: body.pan,
      nameAsPerPan: body.panName,

      bankName: body.bankName,
      bankAccountNumber: body.bankAccount,

      uan: body.uan,
      pfEnabled: body.pf === 'yes',
      onProbation: body.probation === 'yes',

      yearlyCtc: Number(body.yearlyCtc),

      client: clientObjectId,
    });

    res.status(201).json(employee);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* ======================
   GET ALL EMPLOYEES
====================== */
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find()
      .populate('client', 'clientName companyCategory')
      .sort({ createdAt: -1 });

    res.json(employees);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/* ======================
   GET EMPLOYEE BY ID
====================== */
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate(
      'client',
      'clientName'
    );

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ======================
   UPDATE EMPLOYEE
====================== */
exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }}

/* ======================
   DELETE EMPLOYEE
====================== */
exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ======================
   GET EMPLOYEES BY CLIENT
====================== */
exports.getEmployeesByClient = async (req, res) => {
  try {
    const { clientId } = req.params;

    const employees = await Employee.find({
      client: clientId,
      status: 'ACTIVE',
    }).sort({ name: 1 });

    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

