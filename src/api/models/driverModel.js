const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'drivers.json');

exports.getAllDrivers = async () => {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
};

exports.createDriver = async (driver) => {
    const data = await fs.readFile(filePath, 'utf8');
    const drivers = JSON.parse(data);
    drivers.push(driver);
    await fs.writeFile(filePath, JSON.stringify(drivers, null, 4));
    return driver;
};

exports.getDriverById = async (id) => {
    const data = await fs.readFile(filePath, 'utf8');
    const drivers = JSON.parse(data);
    return drivers.find(d => d.id === id);
};

exports.updateDriver = async (id, newDetails) => {
    const data = await fs.readFile(filePath, 'utf8');
    let drivers = JSON.parse(data);
    drivers = drivers.map(d => d.id === id ? { ...d, ...newDetails } : d);
    await fs.writeFile(filePath, JSON.stringify(drivers, null, 4));
    return { ...newDetails, id };
};

exports.deleteDriver = async (id) => {
    const data = await fs.readFile(filePath, 'utf8');
    let drivers = JSON.parse(data);
    drivers = drivers.filter(d => d.id !== id);
    await fs.writeFile(filePath, JSON.stringify(drivers, null, 4));
};
