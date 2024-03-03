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
