const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('project1', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;