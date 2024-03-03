const express = require('express');
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

const app = express();

// Parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Usar los routers
app.use('/view', listViewRouter);
app.use('/edit', listEditRouter);

// Puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
