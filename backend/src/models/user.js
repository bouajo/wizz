const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const { v4: uuidv4 } = require('uuid'); // For generating unique organization IDs

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  auth0Id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  role: {
    type: DataTypes.ENUM('admin', 'user'),
    defaultValue: 'user',
  },
  organizationId: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: () => uuidv4(), // Generate a unique ID for each organization
    unique: true,
  },
});

module.exports = User;
