var express = require('express');
var cons = require('consolidate');
var weather = require('./weather.js');
var ufc = require('./ufc.js');
var quotes = require('./quotes.js');
var notes = require('./notes.js');
var pinterest = require('./pinterest.js');
var app = express();

app.engine('html', cons.swig);

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
app.get('/api/v1/pins', function(req, res) {
    pinterest.getPins(function(callback){
        res.json(callback);
    });
});

app.use(express.static(__dirname + '/views'));
app.listen(3000);

