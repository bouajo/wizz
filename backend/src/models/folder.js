const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Folder = sequelize.define('Folder', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true, // Optionnel
  },
});

module.exports = Folder;
