// pakage import
var State = require("./models/state");

//created a static object to seed DB
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

// function to seed database
function seedDB(){
    data.forEach(element => {
        State.create(element, function(err, state){
        });
    });
}

// export function
module.exports = seedDB;