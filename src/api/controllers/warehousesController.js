const warehouseModel = require('../models/warehouseModel');


exports.getAllWarehouses = async (req, res) => {
    try {
        const warehouses = await warehouseModel.getAllWarehouses();
        res.json(warehouses);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.createWarehouse = async (req, res) => {
    try {
        const warehouses = await warehouseModel.getAllWarehouses();
        const newId = warehouses.length > 0 ? Math.max(...warehouses.map(warehouse => warehouse.id)) + 1 : 1;
        const newWarehouse = {
            id: newId,
            name: req.body.name,
            location: req.body.location
        };
        const createdWarehouse = await warehouseModel.createWarehouse(newWarehouse);
        res.status(201).json({
            message: "Warehouse created successfully",
            warehouse: createdWarehouse
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getWarehouseById = async (req, res) => {
    try {
        const warehouse = await warehouseModel.getWarehouseById(req.params.id);
        if (warehouse) {
            res.json(warehouse);
        } else {
            res.status(404).send('Warehouse not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateWarehouse = async (req, res) => {
    try {
        const updatedWarehouse = await warehouseModel.updateWarehouse(req.params.id, req.body);
        res.json(updatedWarehouse);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteWarehouse = async (req, res) => {
    try {
        await warehouseModel.deleteWarehouse(req.params.id);
        res.status(200).send('Warehouse deleted');
    } catch (error) {
        res.status(500).send(error.message);
    }
};
