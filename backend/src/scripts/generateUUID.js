const { v4: uuidv4 } = require('uuid');
const { sequelize } = require('../config/db');
const { Permission } = require('../models');

const createPermission = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion à la base de données réussie.');

    const permission = await Permission.create({
      userId: uuidv4(),
      folderId: uuidv4(),
      accessLevel: 'read', // Ou 'write' ou 'admin'
    });

    console.log('Permission créée avec succès :', permission.toJSON());
    process.exit(0);
  } catch (error) {
    console.error('Erreur lors de la création de la permission :', error.message);
    process.exit(1);
  }
};

createPermission();
