const { sequelize } = require('../config/db');
const { Folder } = require('../models');

const createFolder = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database.');

    const folder = await Folder.create({
      name: 'Important Documents',
      description: 'Documents containing sensitive information',
    });

    console.log('Folder created:', folder.toJSON());
    process.exit(0);
  } catch (error) {
    console.error('Error creating folder:', error.message);
    process.exit(1);
  }
};

createFolder();
