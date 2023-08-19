module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    movie_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    genre: DataTypes.STRING,
  });
  return Movie;
};
