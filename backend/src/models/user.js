const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Organization = require('./organization');

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
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  organizationId: {
    type: DataTypes.UUID,
    allowNull: true,
  },
});

User.belongsTo(Organization, { foreignKey: 'organizationId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = User;
