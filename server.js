require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const app = express();
const port = 8080;

// Configuración de la conexión a la base de datos PostgreSQL

const db = pgp({
  user: 'postgres',
  password: '123456',
  database: 'Iberdrola',
  host: 'localhost',
  port: 5432,
});

app.use(express.static(__dirname + '/dist/pd-free-angularcli'));

app.use(bodyParser.json());

// Configura una ruta de manejo para la ruta raíz ("/")
app.get('/', (req, res) => {
  // Puedes enviar una respuesta simple o redirigir a otra página
  res.send('¡Bienvenido a mi aplicación!');
});

// Ruta para realizar una consulta simple

app.get('/clientes', async (req, res) => {
  try {
      const result = await db.any('SELECT * FROM Cliente');
      res.json(result);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error en la consulta a la base de datos' });
  }
});

app.get('/clientesActivosC', async (req, res) => {
  try {
      const result = await db.any('SELECT COUNT (*) FROM Cliente_Activo');
      res.json(result);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error en la consulta a la base de datos' });
  }
});

app.get('/clientesActivos', async (req, res) => {
    try {
        const result = await db.any('SELECT * FROM Cliente_Activo');
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en la consulta a la base de datos' });
    }
});

app.get('/clientesBorrados', async (req, res) => {
    try {
        const result = await db.any('SELECT * FROM Cliente_Borrados');
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en la consulta a la base de datos' });
    }
});

// Ruta para consultar contratos
app.get('/contratos', async (req, res) => {
    try {
        const result = await db.any('SELECT * FROM Contrato');
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en la consulta a la base de datos' });
    }
});

// Ruta para consultar contadores
app.get('/contadores', async (req, res) => {
    try {
        const result = await db.any('SELECT * FROM Contador');
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en la consulta a la base de datos' });
    }
});
// Ruta para consultar consumos
app.get('/consumos', async (req, res) => {
    try {
        const result = await db.any('SELECT * FROM Consumo');
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en la consulta a la base de datos' });
    }
});

// Ruta para consultar facturas
app.get('/facturas', async (req, res) => {
  try {
    const result = await db.any('SELECT * FROM Facturas');
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en la consulta a la base de datos' });
  }
});

// Ruta para consultar tarifas
app.get('/tarifas', async (req, res) => {
  try {
    const result = await db.any('SELECT * FROM Tarifa');
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en la consulta a la base de datos' });
  }
});

// Ruta para consultar tarifas privadas
app.get('/privada', async (req, res) => {
  try {
    const result = await db.any('SELECT * FROM Privada');
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en la consulta a la base de datos' });
  }
});

// Ruta para consultar tarifas PVPC
app.get('/pvpc', async (req, res) => {
  try {
    const result = await db.any('SELECT * FROM PVPC');
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en la consulta a la base de datos' });
  }
});

// Ruta para consultar facturas
app.get('/facturas', async (req, res) => {
    try {
        const result = await db.any('SELECT * FROM Facturas');
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en la consulta a la base de datos' });
    }
});

// Inicia el servidor

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
