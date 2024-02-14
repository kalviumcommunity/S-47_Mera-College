var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const my_Schema = new Schema({
    id:Number,
    Name:String,
    Location: String,
    AveragePackage: String,
    placementRates: String,
    CampusSize: String,
    Ranking: String
})

const todolists = mongoose.model('colleges' , my_Schema)
module.exports = todolists