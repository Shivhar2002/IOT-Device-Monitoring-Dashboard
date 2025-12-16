const mongoose = require('mongoose');


const deviceSchema = new mongoose.Schema({
    DeviceID: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Online', 'Offline'],
        default: 'Online'
    },
    temperature: Number,
    humidity: Number,
    lastUpdated: Date
});


module.exports = mongoose.model('Device', deviceSchema);