const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Device = require('../model/Device');

mongoose.connect("mongodb+srv://shivhar:root@cluster0.4nzuryg.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const devices = [
  {
    DeviceID: "DEV-001",
    name: "Temperature Sensor - Room 1",
    status: "Online",
    temperature: 26.5,
    humidity: 55,
    lastUpdated: new Date()
  },
  {
    DeviceID: "DEV-002",
    name: "Humidity Sensor - Lab",
    status: "Offline",
    temperature: 24.2,
    humidity: 65,
    lastUpdated: new Date()
  },
  {
    DeviceID: "DEV-003",
    name: "Pressure Sensor - Factory Floor",
    status: "Online",
    temperature: 28.1,
    humidity: 48,
    lastUpdated: new Date()
  },
  {
    DeviceID: "DEV-004",
    name: "IoT Weather Station",
    status: "Online",
    temperature: 31.4,
    humidity: 72,
    lastUpdated: new Date()
  }
];

async function seedDB() {
  try {
    await Device.deleteMany(); 
    await Device.insertMany(devices);
    console.log('✅ Device seed data inserted successfully');
    process.exit();
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
}

seedDB();
