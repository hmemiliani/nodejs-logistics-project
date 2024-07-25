const vehicleModel = require('../models/vehicleModel');

exports.getAllVehicles = async (req, res) => {
    try {
        const vehicles = await vehicleModel.getAllVehicles();
        res.json(vehicles);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.createVehicle = async (req, res) => {
    try {
        const newVehicle = await vehicleModel.createVehicle(req.body);
        res.status(201).json(newVehicle);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getVehicleById = async (req, res) => {
    try {
        const vehicle = await vehicleModel.getVehicleById(req.params.id);
        if (vehicle) {
            res.json(vehicle);
        } else {
            res.status(404).send('Vehicle not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateVehicle = async (req, res) => {
    try {
        const updatedVehicle = await vehicleModel.updateVehicle(req.params.id, req.body);
        res.json(updatedVehicle);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteVehicle = async (req, res) => {
    try {
        await vehicleModel.deleteVehicle(req.params.id);
        res.status(200).send('Vehicle deleted');
    } catch (error) {
        res.status(500).send(error.message);
    }
};
