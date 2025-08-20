import {Router} from "express"
import alumnoModel from "../models/alumno.model.js"

const router = Router()

// Crear alumno
router.post('/', async (req, res) => {
    const nuevoAlumno = new alumnoModel(req.body)
    await nuevoAlumno.save()
    res.json(nuevoAlumno)
})
// api/alumnos

// Obtener todos los alumnos
router.get('/', async (_, res) => {
    const alumnos = await alumnoModel.find() 
    res.json(alumnos)
})

// Modificar alumno
router.put('/:id', async (req, res) => {
    const alumnoActualizado = await alumnoModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json(alumnoActualizado)
})

// Eliminar alumno
router.delete('/:id', async (req, res) => {
    await alumnoModel.findByIdAndDelete(req.params.id)
    res.json({message: "Alumno eliminado"})
})

export default router
