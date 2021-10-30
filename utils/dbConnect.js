import mongoose from "mongoose";

const connection = {};

async function dbConnec(){
    if(connection.isConnected){
        return;
    };

    const db = await mongoose.connect(process.env.MONGO_URI , {
        useNewUrlParser :true,
        useUnifiedTopology:true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log('connection.isConnected',connection.isConnected);
};

export default dbConnec;


// import { MongoClient } from "mongodb";

// global.mongo = global.mongo || {};

// export async function getMongoClient() {
//   if (!global.mongo.client) {
//     global.mongo.client = new MongoClient(process.env.MONGODB_URI);
//   }
//   // It is okay to call connect() even if it is connected
//   // using node-mongodb-native v4 (it will be no-op)
//   // See: https://github.com/mongodb/node-mongodb-native/blob/4.0/docs/CHANGES_4.0.0.md
//   await global.mongo.client.connect();
//   return global.mongo.client;
// }

// export default async function database(req, res, next) {
//   if (!global.mongo.client) {
//     global.mongo.client = new MongoClient(process.env.MONGODB_URI);
//   }
//   req.dbClient = await getMongoClient();
//   req.db = req.dbClient.db(); // this use the database specified in the MONGODB_URI (after the "/")
//   if (!indexesCreated) await createIndexes(req.db);
//   return next();
// }