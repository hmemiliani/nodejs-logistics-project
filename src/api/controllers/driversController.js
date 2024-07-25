const driverModel = require('../models/driverModel');

exports.getAllDrivers = async (req, res) => {
    try {
        const drivers = await driverModel.getAllDrivers();
        res.json(drivers);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.createDriver = async (req, res) => {
    try {
        const drivers = await driverModel.getAllDrivers();
        const newId = drivers.length > 0 ? Math.max(...drivers.map(driver => driver.id)) + 1 : 1;
        const newDriver = {
            id: newId,
            name: req.body.name
        };
        const createdDriver = await driverModel.createDriver(newDriver);
        res.status(201).json({
            message: "Driver created successfully",
            driver: createdDriver
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getDriverById = async (req, res) => {
    try {
        const driver = await driverModel.getDriverById(req.params.id);
        if (driver) {
            res.json(driver);
        } else {
            res.status(404).send('Driver not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateDriver = async (req, res) => {
    try {
        const updatedDriver = await driverModel.updateDriver(req.params.id, req.body);
        res.json(updatedDriver);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteDriver = async (req, res) => {
    try {
        await driverModel.deleteDriver(req.params.id);
        res.status(200).send('Driver deleted');
    } catch (error) {
        res.status(500).send(error.message);
    }
};
