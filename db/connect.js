require('dotenv/config');

const server = process.env.MONGO_SERVER||"localhost"
const database = process.env.MONGO_DB||"db"
const user = process.env.MONGO_INITDB_ROOT_USERNAME||"root"
const password = process.env.MONGO_INITDB_ROOT_PASSWORD||"password"


console.log(`Connecting to mongo server ${server}`)
console.log(`User: ${user}`)
console.log(`Password: ${password}`)

const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://"+user+":"+password+"@"+server)
            .then(conn => global.conn = conn.db(database))
            .catch(err => console.log(err))

module.exports = { }