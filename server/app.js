'use strict';

// Node JS 3rd party Modules
const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

//Custom modules 
const config = require('./config.js');    

const app = express();

// Register mongoonse
const mongooseConnection = config.mongoose,
    options = {
        autoIndex: false
    }

mongoose.connect(mongooseConnection.url + 
    mongooseConnection.db, options).then( res => {
        console.log('Mongo connection established');
    }).catch( err => {
        console.log('Error while connecting mongoose', + err);
    });

//Body parsing the api request
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json({ limit: '20mb'}));


// Default path
app.get('/', function (req, res) {
    res.send('Node JS Assignment');
});

// Register the Routes 
require('./routes')(app);

// Create nodejs server
app.listen(9000);
console.log('server is listening');

exports = module.exports = app;