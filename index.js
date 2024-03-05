const express = require('express');
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

const app = express();

// Middleware para validar métodos HTTP
const validateMethod = (req, res, next) => {
    if (req.method !== 'GET' && req.method !== 'POST' && req.method !== 'PUT' && req.method !== 'DELETE') {
        return res.status(405).send("Método HTTP no permitido");
    }
    next();
};

// Parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Aplicar middleware para validar métodos HTTP a nivel de aplicación
app.use(validateMethod);

// Usar los routers
app.use('/view', listViewRouter);
app.use('/edit', listEditRouter);

// Puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
