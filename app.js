// import pakages
var express = require("express"),
  mongoose = require("mongoose"),
  State = require("./models/state"),
  app = express();

// set view engine
app.set("view engine", "ejs");
require("dotenv").config();

// connection url for mongoDB
mongoose.connect("mongodb://localhost/chart", {
  useNewUrlParser: true
});

// Global Variables
const PORT = process.env.PORT || 5000;

// Routes
app.get("/", function(req, res) {
  // get chart type from from
  var charttype = req.query.type || "bar";

  // get the data from database
  State.find({}, function(err, stateData) {
    if (err) {
      res.send("Error in data fatching");
    } else {
      var stateLabels = [];
      var statePopulation = [];

      stateData.forEach(element => {
        stateLabels.push(element.state);
        statePopulation.push(parseInt(element.population));
      });

      // created chart object
      var chart = {
        type: charttype,
        data: {
          labels: stateLabels,
          datasets: [
            {
              label: "State Population",
              data: statePopulation
            }
          ]
        }
      };

      // render to index.ejs
      res.render("index", {
        data: chart
      });
    }
  });
});

// port allocation
app.listen(PORT, function() {
  console.log("Chart App Started on : localhost:5000/");
});
