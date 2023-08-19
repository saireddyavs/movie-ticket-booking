const express = require('express');
const app = express();
const apiRoutes = require('./routes/bookMyShow');
const models = require('./models');
const morgan = require('morgan');

app.use(express.json());

app.use(morgan('dev'));

// Use API routes
app.use('/api', apiRoutes);

models.sequelize
  .sync() // This will create or update the database tables based on your models
  .then(() => {
    console.log('Database synced successfully.');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
