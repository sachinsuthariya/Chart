var express = require("express");
var mongoose = require("mongoose");
var State = require("./models/state");
var seedDB = require("./seeds");
var chart = require("chart.js");
var app = express();
app.set("view engine", "ejs");
// seedDB();

mongoose.connect("mongodb://localhost/chart", {
    useNewUrlParser: true
});

app.get("/", function (req, res) {
    // res.send("hello World");
    var charttype;
    if(req.query.type){
        charttype = req.query.type;
    }else{
        charttype = "bar";
    }
    console.log("chart type", charttype);
    
    console.log("chart type", charttype);
    
    State.find({}, function (err, stateData) {
        if (err) {
            res.send("Error in data fatching");
        } else {
            var stateLabels = [];
            var statePopulation = [];
            // console.log("stae data:::",stateData);
            stateData.forEach(element => {
                stateLabels.push(element.state);
                statePopulation.push(parseInt(element.population));
            });
            
            // console.log("stae labels:::",stateLabels);
            // console.log("stae Population:::",statePopulation);
            
            var chart = {
                type: charttype,
                data: {
                    labels: stateLabels,
                    datasets: [{
                        label: "State Population",
                        data: statePopulation
                    }]
                }
              };
            // res.send("Student Data is => "+ studentData);
            res.render("index",{data: chart});

            // res.render("index")
        }
    });
});



app.listen("5000", function () {
    console.log("app Started...");
});