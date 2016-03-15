/*
    Idea and dev Credit goes to NICK
    Followed closely from:
        https://github.com/konecnyna/RpiInfoKiosk/blob/master/weather.js

 */


var http = require('http');
var https = require('https');

module.exports = {
  getForecastIOWeather: function (callback) {
      getForecastIOWeather(callback);
  }
};

function getForecastIOWeather(callback){
	var forecast = 'https://api.forecast.io/forecast/b6e62e7b104f9af8d9ff66f98ec92500/40.5592,-105.0781';
	downloadFileSSL(forecast, function(jsonStr){
		callback(JSON.parse(jsonStr));
	});
}

function downloadFileSSL(url, callback){
    https.get(url, function(res) {
        var body = '';
        res.on('data', function(chunk) {
            body += chunk;
        });
        res.on('end', function() {
            callback(body);
        });
    }).on('error', function(e) {
        console.log("Got error: ", e);
        callback("");
    });
}


