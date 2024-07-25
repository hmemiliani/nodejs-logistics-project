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
        const vehicles = await vehicleModel.getAllVehicles();
        const newId = vehicles.length > 0 ? Math.max(...vehicles.map(vehicle => vehicle.id)) + 1 : 1;
        const newVehicle = {
            id: newId,
            model: req.body.model,
            year: req.body.year
        };
        const createdVehicle = await vehicleModel.createVehicle(newVehicle);
        res.status(201).json({
            message: "Vehicle created successfully",
            vehicle: createdVehicle
        });
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
