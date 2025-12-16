const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("db connect successfully");
    } catch (error) {
        console.log("error in connecting DB", error);
        process.exit(1);
    }
}   

module.exports = connectDB;