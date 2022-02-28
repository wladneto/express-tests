function findAll() {
    return global.conn.collection("sample_collection").find().toArray();
}
             
module.exports = { findAll }