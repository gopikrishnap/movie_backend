let mongoose = require('mongoose');

let objectId = mongoose.Schema.Types.ObjectId;

let movieDetails = new mongoose.Schema({
    Title : String,
    Poster: String
     
})

let movieModel = mongoose.model('users',movieDetails);
module.exports=movieModel;
