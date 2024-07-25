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
        const newDriver = await driverModel.createDriver(req.body);
        res.status(201).json(newDriver);
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
