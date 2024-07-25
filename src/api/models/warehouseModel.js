const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'warehouses.json');

exports.getAllWarehouses = async () => {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
};

exports.createWarehouse = async (warehouse) => {
    const data = await fs.readFile(filePath, 'utf8');
    const warehouses = JSON.parse(data);
    warehouses.push(warehouse); // Agrega el nuevo almacén al array
    await fs.writeFile(filePath, JSON.stringify(warehouses, null, 4));
    return warehouse; // Retorna el almacén creado
};

exports.getWarehouseById = async (id) => {
    const data = await fs.readFile(filePath, 'utf8');
    const warehouses = JSON.parse(data);
    return warehouses.find(w => w.id === id);
};

exports.updateWarehouse = async (id, newDetails) => {
    const data = await fs.readFile(filePath, 'utf8');
    let warehouses = JSON.parse(data);
    warehouses = warehouses.map(w => w.id === id ? { ...w, ...newDetails } : w);
    await fs.writeFile(filePath, JSON.stringify(warehouses, null, 4));
    return { ...newDetails, id };
};

exports.deleteWarehouse = async (id) => {
    const data = await fs.readFile(filePath, 'utf8');
    let warehouses = JSON.parse(data);
    warehouses = warehouses.filter(w => w.id !== id);
    await fs.writeFile(filePath, JSON.stringify(warehouses, null, 4));
};
