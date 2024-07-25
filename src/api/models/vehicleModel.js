const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'vehicles.json');

exports.getAllVehicles = async () => {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
};

exports.createVehicle = async (vehicle) => {
    const data = await fs.readFile(filePath, 'utf8');
    const vehicles = JSON.parse(data);
    vehicles.push(vehicle);
    await fs.writeFile(filePath, JSON.stringify(vehicles, null, 4));
    return vehicle;
};

exports.getVehicleById = async (id) => {
    const data = await fs.readFile(filePath, 'utf8');
    const vehicles = JSON.parse(data);
    return vehicles.find(v => v.id === id);
};

exports.updateVehicle = async (id, newDetails) => {
    const data = await fs.readFile(filePath, 'utf8');
    let vehicles = JSON.parse(data);
    vehicles = vehicles.map(v => v.id === id ? { ...v, ...newDetails } : v);
    await fs.writeFile(filePath, JSON.stringify(vehicles, null, 4));
    return { ...newDetails, id };
};

exports.deleteVehicle = async (id) => {
    const data = await fs.readFile(filePath, 'utf8');
    let vehicles = JSON.parse(data);
    vehicles = vehicles.filter(v => v.id !== id);
    await fs.writeFile(filePath, JSON.stringify(vehicles, null, 4));
};
