/**
 * Created by Jake on 3/14/2016.
 */

fs = require('fs');
var path = require('path');

module.exports = {
    getQuotes: function (callback) {
        getQuotes(callback);
    }
};

function getQuotes(callback){
    var quotesJson = path.join(__dirname, 'quotes.json');
    fs.readFile(quotesJson, function(err, data){
        if (!err){
            var quotes = JSON.parse(data);
            callback(quotes);
        }else{
            console.log(err);
            callback();
        }
    });
}

