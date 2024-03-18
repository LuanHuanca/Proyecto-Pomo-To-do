//importamos el Modelo
import TareaModel from "../models/TareaModel.js";

//METODOS PARA EL CRUD

//MOSTRAR TODAS LAS TAREAS
export const getAllTareas = async (req,res) =>{
    try {
        const tareas = await TareaModel.findAll()
        res.json(tareas)
    } catch (error){
        res.json ( {message: error.message})
    }
} 

//mostrar una tarea
export const getTarea = async (req, res) =>{
    try {
        const tarea = await TareaModel.findAll({
            where: {id:req.params.id}
        })
        res.json(tarea[0])
    } catch (error) {
        res.json ( {message: error.message})
    }
}

//Crear un registro
export const createTarea = async (req,res) =>{
    try {
        await TareaModel.create(req.body)
        res.json({
            "meessage": "Registro creado correctamente"
        })
    } catch (error) {
        res.json ( {message: error.message})
    }
}
//Actualizar tarea
export const updateTarea = async (req,res) =>{
    try {
        await TareaModel.update(req.body,{
            where: {id:req.params.id}
        })
        res.json({
            "message" : "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json ( {message: error.message})
    }
}
//Eliminar una tarea
export const deleteTarea = async (req,res) =>{
    try {
        TareaModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message": "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json ( {message: error.message})
    }
}