const models = require('../models');

// Controller logic for /api/theatres/:theatreId/dates endpoint
async function getDatesForTheatre(req, res) {
  const { theatreId } = req.params;
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);

  try {
    const dates = await models.Showtime.findAll({
      attributes: [
        [models.sequelize.fn('DISTINCT', models.sequelize.col('date')), 'date'],
      ],
      where: {
        theatreId,
        date: {
          [models.Sequelize.Op.between]: [today, nextWeek],
        },
      },
    });
    res.json(dates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getDatesForTheatre,
};
