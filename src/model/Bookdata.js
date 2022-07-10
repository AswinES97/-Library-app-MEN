//Access Mongooose package
const mongoose = require('mongoose');

//Connect to database
mongoose.connect('mongodb+srv://user1:Aswines@aswines.7cwwj.mongodb.net/Lib-app?retryWrites=true&w=majority');

//Schema define
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String
})

//model 
const Bookdata = mongoose.model('bookdata',BookSchema);

//export
module.exports = Bookdata;