/**
 * Created by Jake on 3/14/2016.
 */

fs = require('fs');
var path = require('path');

module.exports = {
    getNotes: function (callback) {
        getNotes(callback);
    },
    writeNote: function (callback){
        writeNote(callback);
    }
};

function getNotes(callback){
    var notesJson = path.join(__dirname, 'notes.json');
    fs.readFile(notesJson, function(err, data){
        if (!err){
            var notes = JSON.parse(data);
            callback(notes);
        }else{
            console.log(err);
            callback();
        }
    });
}


function writeNote(){
    var notesJson = path.join(__dirname, 'notes.json');

    var textBox = document.getElementById('textBox');
    fs.writeFile(notesJson, textBox.innerHTML, function(err){
        if(!err){
            callback('Note saved!');
        }else{
            console.log(err);
            callback();
        }
    })
}