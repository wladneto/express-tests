const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://user:1234@mongo")
            .then(conn => global.conn = conn.db("sample_db"))
            .catch(err => console.log(err))

function findAll() {
    return global.conn.collection("sample_collection").find().toArray();
}
             
module.exports = { findAll }