const express = require('express');
const app = express();

// Lista de tareas
const tasks = [
    {
        id: "123456",
        isCompleted: false,
        description: "Walk the dog"
    }
];

// Ruta para obtener la lista de tareas
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
