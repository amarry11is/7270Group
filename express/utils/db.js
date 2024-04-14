const { MongoClient, ObjectId } = require('mongodb');

process.env.MONGODB_URI = 'mongodb://wen:bpjPXIszjyTZFgo326BL1iIBrwikOI6Ltw3mwJT2QN9L6dKI2T5aotK3t22gmojmuF9QpKYvIKQyACDbf2BDzQ==@wen.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@wen@';

if (!process.env.MONGODB_URI) {
    // throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
    process.env.MONGODB_URI = 'mongodb://localhost:27017';
}

// Connect to MongoDB
async function connectToDB() {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db('surveysDB');
    db.client = client;
    return db;
}

module.exports = { connectToDB, ObjectId };