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
