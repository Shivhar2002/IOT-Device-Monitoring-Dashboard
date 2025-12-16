const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const deviceRoutes = require('./routes/deviceRoutes');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();
app.use('/api/devices', deviceRoutes);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})