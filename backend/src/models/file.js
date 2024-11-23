const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./user');
const Organization = require('./organization');

const File = sequelize.define('File', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  fileName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  filePath: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  uploadedBy: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  organizationId: {
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
});

// Define relationships
File.belongsTo(User, {
  foreignKey: 'uploadedBy',
  as: 'Uploader', // Alias to access the uploader details
  onDelete: 'CASCADE', // Ensure files are deleted if the user is deleted
});

File.belongsTo(Organization, {
  foreignKey: 'organizationId',
  onDelete: 'CASCADE', // Ensure files are deleted if the organization is deleted
});

module.exports = File;
