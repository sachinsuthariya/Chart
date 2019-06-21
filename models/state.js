var mongoose = require("mongoose");

var stateSchema = new mongoose.Schema({
    state: String,
    population: String
});

module.exports = mongoose.model("state", stateSchema);
