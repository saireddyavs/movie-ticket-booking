const models = require('../models');

// Controller logic for /api/theatres endpoint
async function getAllTheatres(req, res) {
  try {
    const theatres = await models.Theatre.findAll();
    res.json(theatres);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getAllTheatres,
};
