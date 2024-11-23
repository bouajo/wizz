const express = require('express');
const router = express.Router();
const checkJwt = require('../middleware/authMiddleware'); // Middleware d'authentification
const checkUserExists = require('../middleware/authMiddleware'); // Middleware de vérification
const { Permission } = require('../models');

// Route pour ajouter une nouvelle permission
router.post('/permissions', checkJwt, checkUserExists, async (req, res) => {
  try {
    const { userId, folderId, accessLevel } = req.body;

    const permission = await Permission.create({ userId, folderId, accessLevel });
    res.status(201).json(permission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
