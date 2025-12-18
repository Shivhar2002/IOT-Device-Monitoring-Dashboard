const Device = require("../model/Device");


exports.getDevices = async (req, res) => {
	try {
		const devices = await Device.find();
		const devicesWithId = devices.map(device => ({
			...device.toObject(),
			id: device.DeviceID
		}));
		res.json(devicesWithId);
	} catch (error) {
		res.status(500).json({ message: 'Server Error' });
	}
};


exports.getDeviceById = async (req, res) => {
	try {
		const device = await Device.findOne({ DeviceID: req.params.id });
		if (!device) {
			return res.status(404).json({ message: 'Device not found' });
		}
		device.temperature = Number((20 + Math.random() * 10).toFixed(1));
		device.humidity = Number((40 + Math.random() * 20).toFixed(1));
		device.lastUpdated = new Date();
		await device.save();
		const deviceObj = device.toObject();
		deviceObj.id = device.DeviceID;
		res.json(deviceObj);
	} catch (error) {
		res.status(500).json({ message: 'Server Error' });
	}
};