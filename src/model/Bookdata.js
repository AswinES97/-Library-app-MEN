//Access Mongooose package
const mongoose = require('mongoose');

//Connect to database
mongoose.connect('mongodb://localhost:27017/library');

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