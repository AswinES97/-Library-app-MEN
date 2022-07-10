const Session = require("express-session");
const MongoDBSession = require("connect-mongodb-session")(Session);
const mongoose = require("mongoose");
const mongoUri = 'mongodb+srv://user1:Aswines@aswines.7cwwj.mongodb.net/Lib-app?retryWrites=true&w=majority';

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
