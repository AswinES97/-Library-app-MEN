const Session = require("express-session");
const MongoDBSession = require("connect-mongodb-session")(Session);
const mongoose = require("mongoose");
const mongoUri = 'mongodb://localhost:27017/library';

// mongoose.createConnection(mongoUri,{
    // useNewUrlParser:true,
    // useCreateIndex:true,
    // useUnifiedTopology:true
// })

const store = new MongoDBSession({
    uri:mongoUri,
    collection:'session'
});

module.exports = store;
