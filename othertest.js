var http = require('http');
var https = require('https');

module.exports = {
  getForecastIOWeather: function (callback) {
    getForecastIOWeather(callback);
  }
};

function getForecastIOWeather(callback){
	var forecast = 'https://api.forecast.io/forecast/ab4397914a446e55d16d43db59026d56/40.733860,-74.004998';
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
