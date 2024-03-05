const express = require('express');
const router = express.Router();

// Lista de tareas
let tasks = [
    {
        id: "123456",
        isCompleted: false,
        description: "Walk the dog"
    }
];

// Middleware para validar el cuerpo de las solicitudes POST y PUT
const validateTaskData = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: "El cuerpo de la solicitud no puede estar vacío" });
    }
    const { id, isCompleted, description } = req.body;
    if (!id || !isCompleted || !description) {
        return res.status(400).json({ error: "La información de la tarea es inválida o faltan atributos" });
    }
    next();
};

// Ruta para crear una tarea
router.post('/create', (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.json(newTask);
});

// Ruta para eliminar una tarea
router.delete('/:id', (req, res) => {
    const taskId = req.params.id;
    tasks = tasks.filter(task => task.id !== taskId);
    res.json({ message: 'Tarea eliminada exitosamente' });
});

// Ruta para actualizar una tarea
router.put('/:id', (req, res) => {
    const taskId = req.params.id;
    const updatedTask = req.body;
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            return { ...task, ...updatedTask };
        }
        return task;
    });
    res.json(updatedTask);
});

module.exports = router;
