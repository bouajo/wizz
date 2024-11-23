const { sequelize } = require('../config/db');

// Afficher les variables d'environnement pour le débogage
console.log('Variables d’environnement chargées :', {
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
});

const syncModels = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion à la base de données réussie.');

    // Synchronisation des modèles
    await sequelize.sync({ alter: true }); // Mets à jour la structure sans supprimer les données
    console.log('Les modèles ont été synchronisés avec succès.');
    process.exit(0);
  } catch (error) {
    console.error('Erreur lors de la synchronisation :', error.message);
    process.exit(1);
  }
};

syncModels();
