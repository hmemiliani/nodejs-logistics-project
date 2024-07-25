const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'shipments.json');

exports.getAllShipments = async () => {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
};

exports.createShipment = async (shipment) => {
    const data = await fs.readFile(filePath, 'utf8');
    const shipments = JSON.parse(data);
    shipments.push(shipment);
    await fs.writeFile(filePath, JSON.stringify(shipments, null, 4));
    return shipment;
};

exports.getShipmentById = async (id) => {
    const data = await fs.readFile(filePath, 'utf8');
    const shipments = JSON.parse(data);
    return shipments.find(s => s.id === id);
};

exports.updateShipment = async (id, newDetails) => {
    const data = await fs.readFile(filePath, 'utf8');
    let shipments = JSON.parse(data);
    shipments = shipments.map(s => s.id === id ? { ...s, ...newDetails } : s);
    await fs.writeFile(filePath, JSON.stringify(shipments, null, 4));
    return { ...newDetails, id };
};

exports.deleteShipment = async (id) => {
    const data = await fs.readFile(filePath, 'utf8');
    let shipments = JSON.parse(data);
    shipments = shipments.filter(s => s.id !== id);
    await fs.writeFile(filePath, JSON.stringify(shipments, null, 4));
};
