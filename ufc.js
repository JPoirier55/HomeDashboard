/**
 * Created by Jake on 3/14/2016.
 */
var http = require('http');
var https = require('https');

module.exports = {
    getUfcEvents: function (callback) {
        getUfcEvents(callback);
    }
};

function getUfcEvents(callback){
    var events = 'http://ufc-data-api.ufc.com/api/v1/us/events';
    downloadFileSSL(events, function(jsonStr){
        callback(JSON.parse(jsonStr));
    });
}

function downloadFileSSL(url, callback){
    http.get(url, function(res) {
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