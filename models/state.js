// pakage import
var mongoose = require("mongoose");

// creatd Schema
var stateSchema = new mongoose.Schema({
    state: String,
    population: String
});

//export Schema
module.exports = mongoose.model("state", stateSchema);