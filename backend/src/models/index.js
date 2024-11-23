const User = require('./user');
const Organization = require('./organization');
const Role = require('./role');
const File = require('./file');
const Folder = require('./folder');
const Permission = require('./permission');

// Relationships
Organization.hasMany(User, { as: 'Users', foreignKey: 'organizationId' });
User.belongsTo(Organization, { foreignKey: 'organizationId' });

Role.hasMany(User, { as: 'Users', foreignKey: 'roleId' });
User.belongsTo(Role, { foreignKey: 'roleId' });

User.hasMany(Permission, { foreignKey: 'userId', as: 'Permissions' });
Permission.belongsTo(User, { foreignKey: 'userId' });

Folder.hasMany(File, { foreignKey: 'folderId', as: 'Files' });
File.belongsTo(Folder, { foreignKey: 'folderId' });

Folder.hasMany(Permission, { foreignKey: 'folderId', as: 'Permissions' });
Permission.belongsTo(Folder, { foreignKey: 'folderId' });

module.exports = { User, Organization, Role, Folder, Permission, File };
