require('dotenv/config');

const collection = process.env.MONGO_COLLECTION||"collection"

function findAll() {
    return global.conn.collection(collection    ).find().toArray();
}
             
module.exports = { findAll }