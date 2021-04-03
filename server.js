//dependencies

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//connection to mongoDB

mongoose.connect('mongodb://samer:samer123@ds237808.mlab.com:37808/restdb');
var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//routes

app.use('/api',require('./routes/api'));

//start server
app.listen(3000);
console.log('server is running on port 3000');
