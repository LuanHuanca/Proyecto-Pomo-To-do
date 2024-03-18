//importamos la conexion con la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

    const TareaModel = db.define('tareas',{
        titulo:{ type:DataTypes.STRING},
        descripcion:{type:DataTypes.STRING},
        tiempo:{type:DataTypes.INTEGER},
        prioridad:{type:DataTypes.STRING},
        completado:{type:DataTypes.BOOLEAN} 
    })
    export default TareaModel