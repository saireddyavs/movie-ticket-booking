const express = require('express');
const router = express.Router();
const theatreController = require('../controllers/theatreController');
const dateController = require('../controllers/dateController');
const movieController = require('../controllers/movieController');

// Define routes and attach controllers
router.get('/theatres', theatreController.getAllTheatres);
router.get('/theatres/:theatreId/dates', dateController.getDatesForTheatre);
router.get(
  '/theatres/:theatreId/movies/:date',
  movieController.getMoviesForTheatreOnDate
);

module.exports = router;
