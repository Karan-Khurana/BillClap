const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const User = sequelize.define('User', {
  username: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING },
  mobile_number: { type: DataTypes.STRING, unique: true },
  age: { type: DataTypes.INTEGER },
  gender: { type: DataTypes.STRING },
});

module.exports = User;