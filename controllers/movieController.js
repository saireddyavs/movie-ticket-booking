const models = require('../models');

// Controller logic for /api/theatres/:theatreId/movies/:date endpoint
async function getMoviesForTheatreOnDate(req, res) {
  const { theatreId, date } = req.params;

  try {
    const movies = await models.Showtime.findAll({
      where: {
        theatreId,
        date,
      },
      include: [{ model: models.Movie }],
    });
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getMoviesForTheatreOnDate,
};
