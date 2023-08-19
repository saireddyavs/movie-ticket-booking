module.exports = (sequelize, DataTypes) => {
  const Showtime = sequelize.define('Showtime', {
    showtime: DataTypes.STRING,
    date: DataTypes.DATEONLY,
  });

  Showtime.associate = (models) => {
    Showtime.belongsTo(models.Theatre);
    Showtime.belongsTo(models.Movie);
  };

  return Showtime;
};
