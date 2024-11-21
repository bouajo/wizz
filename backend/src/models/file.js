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
  },
});

File.belongsTo(User, { foreignKey: 'uploadedBy', as: 'Uploader' });
File.belongsTo(Organization, { foreignKey: 'organizationId' });

module.exports = File;
