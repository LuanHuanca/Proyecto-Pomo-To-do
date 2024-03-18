const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'pomotodo' 
});

// Conectar a la base de datos MySQL
connection.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conexión a la base de datos MySQL establecida');
});

// Middleware para parsear el body de las peticiones como JSON
app.use(express.json());

// Crear nueva tarea
app.post('/tareas', (req, res) => {
  const { nombre, descripcion, fecha_vencimiento, prioridad } = req.body;
  const query = 'INSERT INTO Tareas (nombre, descripcion, fecha_vencimiento, prioridad) VALUES (?, ?, ?, ?)';
  connection.query(query, [nombre, descripcion, fecha_vencimiento, prioridad], (error, results) => {
    if (error) {
      console.error('Error al crear la tarea: ' + error);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      res.status(201).json({ message: 'Tarea creada exitosamente', tarea: { id: results.insertId, nombre, descripcion, fecha_vencimiento, prioridad } });
    }
  });
});

// Eliminar tarea
app.delete('/tareas/:id', (req, res) => {
  const tareaId = req.params.id;
  const query = 'DELETE FROM Tareas WHERE id = ?';
  connection.query(query, [tareaId], (error, results) => {
    if (error) {
      console.error('Error al eliminar la tarea: ' + error);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      res.status(200).json({ message: 'Tarea eliminada exitosamente' });
    }
  });
});

// Marcar tarea como completada
app.put('/tareas/:id/completar', (req, res) => {
  const tareaId = req.params.id;
  const query = 'UPDATE Tareas SET completada = true WHERE id = ?';
  connection.query(query, [tareaId], (error, results) => {
    if (error) {
      console.error('Error al marcar la tarea como completada: ' + error);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      res.status(200).json({ message: 'Tarea marcada como completada exitosamente' });
    }
  });
});

// Filtrado de tareas por prioridad
app.get('/tareas/prioridad/:prioridad', (req, res) => {
  const prioridad = req.params.prioridad;
  const query = 'SELECT * FROM Tareas WHERE prioridad = ?';
  connection.query(query, [prioridad], (error, results) => {
    if (error) {
      console.error('Error al obtener las tareas por prioridad: ' + error);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      res.status(200).json(results);
    }
  });
});

// Mostrar listado de tareas completadas
app.get('/tareas/completadas', (req, res) => {
  const query = 'SELECT * FROM Tareas WHERE completada = true';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener las tareas completadas: ' + error);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      res.status(200).json(results);
    }
  });
});

// Mostrar listado de tareas incompletas
app.get('/tareas/incompletas', (req, res) => {
  const query = 'SELECT * FROM Tareas WHERE completada = false';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener las tareas incompletas: ' + error);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      res.status(200).json(results);
    }
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
