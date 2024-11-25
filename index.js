const express = require('express');
const sequelize = require('./config/config');
const userRoutes = require('./Route/UserRoutes');

const app = express();
app.use(express.json());
app.use(userRoutes);

sequelize.sync().then(() => {
  console.log('Database connected and tables created');
  app.listen(3000, () => console.log('Server is running on port 3000'));
});