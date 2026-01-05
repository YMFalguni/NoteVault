require("dotenv").config();
const mongoose = require('mongoose');

console.log("MONGO_URL:", process.env.MONGO_URL);

const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
    }
}


module.exports = connectToMongo;
