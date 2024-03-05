const express = require('express');
const router = express.Router();

// Lista de tareas
const tasks = [
    {
        id: "123456",
        isCompleted: false,
        description: "Walk the dog"
    }
];

// Middleware para validar parámetros
const validateParams = (req, res, next) => {
    if (!req.params.id) {
        return res.status(400).json({ error: "Parámetro 'id' inválido" });
    }
    next();
};

// Ruta para obtener la tarea completa o incompleta según el ID proporcionado
router.get('/:id', validateParams, (req, res) => {
    const taskId = req.params.id;
    const task = tasks.find(task => task.id === taskId);
    if (!task) {
        return res.status(404).json({ error: "Tarea no encontrada" });
    }
    res.json(task);
});

// Ruta para obtener las tareas completas
router.get('/completed', (req, res) => {
    const completedTasks = tasks.filter(task => task.isCompleted);
    res.json(completedTasks);
});

// Ruta para obtener las tareas incompletas
router.get('/incomplete', (req, res) => {
    const incompleteTasks = tasks.filter(task => !task.isCompleted);
    res.json(incompleteTasks);
});

module.exports = router;
