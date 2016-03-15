/**
 * Created by Jake on 3/15/2016.
 */
var http = require('http');
var https = require('https');

module.exports = {
    getPins: function (callback) {
        getPins(callback);
    }
};

function getPins(callback){
    var pins = 'https://api.pinterest.com/v1/me/pins/?access_token=AfTb5bnYNUInzJ9ifMH_tPcQEIXWFDwc0BkCrVtC7-mQ6kAprAAAAAA&fields=id%2Clink%2Cnote%2Cimage';
    downloadFileSSL(pins, function(jsonStr){
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