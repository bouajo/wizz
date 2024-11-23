const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Permission = sequelize.define('Permission', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  folderId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  accessLevel: {
    type: DataTypes.ENUM('read', 'write', 'admin'),
    allowNull: false,
  },
}, {

  tableName: 'Permissions',
  timestamps: true,
});

module.exports = Permission;
