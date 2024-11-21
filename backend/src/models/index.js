const User = require('./user');
const Organization = require('./organization');
const Role = require('./role');
const File = require('./file');

// Relationships
Organization.hasMany(User, { as: 'Users', foreignKey: 'organizationId' });
User.belongsTo(Organization, { foreignKey: 'organizationId' });

Role.hasMany(User, { as: 'Users', foreignKey: 'roleId' });
User.belongsTo(Role, { foreignKey: 'roleId' });

module.exports = { User, Organization, Role };
