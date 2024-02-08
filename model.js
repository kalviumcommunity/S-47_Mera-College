var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const my_Schema = new Schema({
    Name:String,
    Location:String,
    AveragePackage:String,
    placementRates:String,
    CampusSize:String,
    Ranking:String
})

const model = mongoose.model('college' , my_Schema)
module.exports = model






