const express = require('express');
const { getDevices, getDeviceById } = require('../controllers/deviceController');
const router = express.Router();


router.get('/', getDevices);
router.get('/:id', getDeviceById);


module.exports = router;