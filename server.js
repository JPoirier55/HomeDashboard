var express = require('express');
var cons = require('consolidate');
var weather = require('./weather.js');
var app = express();

app.engine('html', cons.swig);

app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.render('index.html');
})

app.get('/abcd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.render('test.html');
})

app.get('/api/v1/w', function(req, res) {
 weather.getForecastIOWeather(function(callback){
      res.json(callback);
   });
});
app.use(express.static(__dirname + '/views'));
app.listen(8080);

