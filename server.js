const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const themeRoutes = require('./routes/themeRoutes');
const cors = require('cors');
// Cargar variables de entorno
dotenv.config();

// Conectar a MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Usar las rutas de temas
app.use('/api', themeRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
