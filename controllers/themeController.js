const Theme = require('../models/Theme');

// Obtener todos los temas
exports.getThemes = async (req, res) => {
  try {
    const themes = await Theme.find();
    res.json(themes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los temas' });
  }
};

// Crear un nuevo tema
exports.createTheme = async (req, res) => {
  const { title, type_theme, name, images, category, status, url_demo, price, sale_price } = req.body;

  try {
    const newTheme = new Theme({ title, type_theme, name, images, category, status, url_demo, price, sale_price });
    await newTheme.save();
    res.status(201).json(newTheme);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el tema' });
  }
};

// Actualizar un tema
exports.updateTheme = async (req, res) => {
  const { id } = req.params;
  const { title, type_theme, name, images, category, status, url_demo, price, sale_price } = req.body;

  try {
    const updatedTheme = await Theme.findByIdAndUpdate(id, { title, type_theme, name, images, category, status, url_demo, price, sale_price }, { new: true });
    res.json(updatedTheme);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el tema' });
  }
};

// Eliminar un tema
exports.deleteTheme = async (req, res) => {
  const { id } = req.params;

  try {
    await Theme.findByIdAndDelete(id);
    res.json({ message: 'Tema eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el tema' });
  }
};
