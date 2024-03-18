import express from 'express';
import cors from 'cors';
//importamos la conexion a la DB
import db from "./database/db.js";
//importamos nuestro enrutador
import tareaRoutes from "./routes/routes.js";

const app = express()
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())
app.use('/tareas',tareaRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la DB')
} catch (error) {
    console.log(`El error de la conexion es : ${error}`)
}

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });