const express = require('express');
const router = express.Router();
const shipmentsController = require('../controllers/shipmentsController');

router.get('/', shipmentsController.getAllShipments);
router.post('/', shipmentsController.createShipment);
router.get('/:id', shipmentsController.getShipmentById);
router.put('/:id', shipmentsController.updateShipment);
router.delete('/:id', shipmentsController.deleteShipment);

module.exports = router;
