var express = require('express');
var cons = require('consolidate');
var weather = require('./weather.js');
var ufc = require('./ufc.js');
var quotes = require('./quotes.js');
var notes = require('./notes.js');
var app = express();

app.engine('html', cons.swig);

app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.render('index.html');
});

app.get('/ufc', function(req, res) {
   res.render('index.html');
});

app.get('/api/v1/weather', function(req, res) {
    weather.getForecastIOWeather(function(callback){
        res.json(callback);
    });
});
app.get('/api/v1/ufc', function(req, res) {
    ufc.getUfcEvents(function(callback){
        res.json(callback);
    });
});
app.get('/api/v1/quotes', function(req, res) {
    quotes.getQuotes(function(callback){
        res.json(callback);
    });
});
app.get('/api/v1/notes', function(req, res) {
    notes.getNotes(function(callback){
        res.json(callback);
    });
});
app.get('/request', function(req, res){
    notes.writeNote();
    res.json();
});


app.use(express.static(__dirname + '/views'));
app.listen(8080);

