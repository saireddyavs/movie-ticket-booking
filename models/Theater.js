module.exports = (sequelize, DataTypes) => {
  const Theatre = sequelize.define('Theatre', {
    theatre_name: DataTypes.STRING,
    location: DataTypes.STRING,
  });
  return Theatre;
};
