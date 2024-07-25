//dependencias
const express = require('express');
const bodyParser = require('body-parser');
const errorHandlingMiddleware = require('./middleware/errorHandlingMiddleware');

//routers
const warehouseRoutes = require('./api/routes/warehouseRoutes');
const shipmentRoutes = require('./api/routes/shipmentRoutes');
const driverRoutes = require('./api/routes/driverRoutes');
const vehicleRoutes = require('./api/routes/vehicleRoutes');

//instancia de express
const app = express();
const port = 3000;

//middleware para parsear el cuerpo de las solicitudes JSON
app.use(bodyParser.json());

app.use(errorHandlingMiddleware);

//rutas
app.use('/warehouses', warehouseRoutes);
app.use('/shipments', shipmentRoutes);
app.use('/drivers', driverRoutes);
app.use('/vehicles', vehicleRoutes);

//middleware para maejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

//punto de entrada principal
app.get('/', (req, res) => {
    res.send('Welcome to the Logistics Management API!');
});

//testigo de que el servidor esta corriendo en cual puerto y url
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
