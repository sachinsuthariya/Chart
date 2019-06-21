var mongoose = require("mongoose");
var State = require("./models/state");

var data = [
    {
        state: "Utter Pradesh",
        population: "12"
    },
    {
        state: "Bihar",
        population: "45"
    },
    {
        state: "punjab",
        population: "20"
    },
    {
        state: "Gujarat",
        population: "15"
    },
    {
        state: "kerala",
        population: "84"
    }
];


function seedDB(){
    data.forEach(element => {
        State.create(element, function(err, state){
            if(err){
                console.log("Error in data Seeding");
            }else{
                console.log("Data inserted to Student Successfully");   
            }
        });
    });
}

module.exports = seedDB;