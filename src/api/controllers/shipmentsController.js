const shipmentModel = require('../models/shipmentModel');

exports.getAllShipments = async (req, res) => {
    try {
        const shipments = await shipmentModel.getAllShipments();
        res.json(shipments);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.createShipment = async (req, res) => {
    try {
        const shipments = await shipmentModel.getAllShipments();
        const newId = shipments.length > 0 ? Math.max(...shipments.map(shipment => shipment.id)) + 1 : 1;
        const newShipment = {
            id: newId,
            item: req.body.item,
            quantity: req.body.quantity,
            warehouseid: req.body.warehouseid
        };
        const createdShipment = await shipmentModel.createShipment(newShipment);
        res.status(201).json({
            message: "Shipment created successfully",
            shipment: createdShipment
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getShipmentById = async (req, res) => {
    try {
        const shipment = await shipmentModel.getShipmentById(req.params.id);
        if (shipment) {
            res.json(shipment);
        } else {
            res.status(404).send('Shipment not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateShipment = async (req, res) => {
    try {
        const updatedShipment = await shipmentModel.updateShipment(req.params.id, req.body);
        res.json(updatedShipment);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteShipment = async (req, res) => {
    try {
        await shipmentModel.deleteShipment(req.params.id);
        res.status(200).send('Shipment deleted');
    } catch (error) {
        res.status(500).send(error.message);
    }
};
