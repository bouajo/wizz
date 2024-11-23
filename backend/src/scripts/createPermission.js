require('dotenv').config(); // Charger les variables d'environnement
const { v4: uuidv4 } = require('uuid'); // Importer uuid
const { sequelize } = require('../config/db'); // Charger la configuration DB
const { Permission } = require('../models'); // Charger le modèle Permission

const createPermission = async () => {
  try {
    // Afficher les variables d'environnement pour confirmer qu'elles sont bien chargées
    console.log('Chargement des variables d’environnement :', {
      DB_HOST: process.env.DB_HOST,
      DB_PORT: process.env.DB_PORT,
      DB_USER: process.env.DB_USER,
      DB_PASSWORD: process.env.DB_PASSWORD,
      DB_NAME: process.env.DB_NAME,
    });

    // Tester la connexion à la base de données
    await sequelize.authenticate();
    console.log('Connexion à la base de données réussie.');

    // Générer des UUID valides
    const userId = uuidv4();
    const folderId = uuidv4();

    console.log('UUID générés :', { userId, folderId });

    // Log the data being sent to PostgreSQL
    console.log('Données envoyées à PostgreSQL :', {
      userId,
      folderId,
      accessLevel: 'read',
    });

    // Créer une permission
    const permission = await Permission.create({
      userId, // Utiliser l'UUID généré pour userId
      folderId, // Utiliser l'UUID généré pour folderId
      accessLevel: 'read', // Niveau d'accès
    });

    console.log('Permission créée avec succès :', permission.toJSON());
    process.exit(0);
  } catch (error) {
    console.error('Erreur lors de la création de la permission :', error.message);
    process.exit(1);
  }
};

// Exécuter le script
createPermission();
