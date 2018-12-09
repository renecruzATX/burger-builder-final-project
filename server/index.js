const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://user0:password0@ds127954.mlab.com:27954/burger-builder-final-project");


const OrderRoutes = require("./OrderRoutes");

const app = express();

app.use(bodyParser.json());

app.use("/orders", OrderRoutes);

app.use(function(req, res, next)
{
    return res.send("Server Started");
});

app.listen(3004, () => console.log("Server started at localhost:3004"));