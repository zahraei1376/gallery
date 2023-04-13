import mongoose from "mongoose";

const connection = {};

async function dbConnec() {
    if (connection.isConnected) {
        return;
    };

    const db = await mongoose.connect("mongodb://test:test@mongo:27017/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
};

export default dbConnec;