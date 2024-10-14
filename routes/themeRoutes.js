const express = require('express');
const router = express.Router();
const { getThemes, createTheme, updateTheme, deleteTheme } = require('../controllers/themeController');

// Rutas para el CRUD de temas
router.get('/themes', getThemes);
router.post('/themes', createTheme);
router.put('/themes/:id', updateTheme);
router.delete('/themes/:id', deleteTheme);

module.exports = router;
