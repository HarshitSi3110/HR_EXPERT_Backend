const Client = require('../models/client.model');

/* CREATE CLIENT */
exports.createClient = async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json({
      message: 'Client created successfully',
      client,
    });
  } catch (error) {
    console.error('CREATE CLIENT ERROR:', error);

    if (error.code === 11000) {
      return res.status(400).json({
        message: 'Client ID already exists',
      });
    }

    res.status(500).json({ message: 'Server error' });
  }
};

/* GET ALL CLIENTS */
exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

/* GET CLIENT BY ID */
exports.getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

/* UPDATE CLIENT */
exports.updateClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    res.json({
      message: 'Client updated successfully',
      client,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

/* DELETE CLIENT */
exports.deleteClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);

    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    res.json({ message: 'Client deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
