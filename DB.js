const { Sequelize } = require('sequelize')
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.MYSQLDATABASE,
  process.env.MYSQLUSER,
  process.env.MYSQLPASSWORD,
  {
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    dialect: 'mysql',
    logging: false,
  }
);

// Función para probar la conexión a la base de datos
const DBTest = async () => {
    try {
        await sequelize.authenticate(); // Intenta autenticar la conexión con la base de datos.
        console.log('Se conectó a la base de datos.'); // Muestra un mensaje si la conexión es exitosa.
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error); // Muestra un error si la conexión falla.
    }
};

module.exports = { sequelize, DBTest }; 