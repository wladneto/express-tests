require('dotenv/config');

const collection = process.env.MONGO_COLLECTION||"collection"

function findAll() {
    return global.conn.collection(collection).find().toArray();
}

function insert(sample) {
    return global.conn.collection(collection).insertOne(sample);
}
             
module.exports = { findAll, insert }