const express = require('express');
const cors = require('cors');
const { sequelize } = require('./DB');
const Usuario = require('./src/models/User');
require('dotenv').config();

const authRouter = require('./src/auth/Authen');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("ejemplo");
});

app.use('/auth', authRouter);

// Sincronización y levantamiento del servidor
sequelize.sync({ force: false })
  .then(() => {
    console.log('✅ Tablas sincronizadas');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => console.error('❌ Error al sincronizar modelos:', err));
