const http = require('http');
const fs = require('fs'); 
var contentType = require('content-type');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var formidable = require('formidable');
//var nodemailer = require('nodemailer'); install the module
// var mongo = require('mongodb');
// const mongoose = require('mongoose');
var express = require('express');
const app = express();
var url = require('url');

//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/mydb";




const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.write('<h1>Wekesa Love court</h1>');
    // res.write('<h2>Kama uko na madem wawili btw umbwa wewe</h2>');
    // res.write('<form action="fileupload method=POST" enctype=multipat/form-data" />');
    // res.write('<label>Name:</label><br>');
    // res.write('<input type="text" /><br>');
    // res.write('<label>email:</label><br>');
    // res.write('<input type="text" /><br>');
    // res.write('<label>Password:</label><br>');
    // res.write('<input type="text" /><br>');
    
    // res.write('<input type="file" name="filetoupoad" /> <br>');
    // res.write('<button type="submit">submit</button>');
    // res.write('</form>');
    //return res.end();
    
   
});


app.get('/', (req,res) => {
    res.render('views/index');
});


// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
//   });

//set the view engine to ejs
app.set('view engine', 'ejs');

//use res.render to load up an ejs view file
//index page


//create an event handler:
var myEventHandler = function () {
    console.log('Tuko on...');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//fire the 'scream' event:
eventEmitter.emit('scream');

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running...');
});