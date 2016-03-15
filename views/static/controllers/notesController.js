///**
// * Created by Jake on 3/14/2016.
// */
//var path = require('path');
//fs = require('fs');
//
//var notesJson = path.join(__dirname, 'notes.json');
//
//function getNotes(){
//    fs.readFile(notesJson, function(err, data){
//        if (!err){
//            var notes = JSON.parse(data);
//            callback(notes);
//        }else{
//            console.log(err);
//            callback();
//        }
//    });
//}
// function writeNote(){
//     var textBox = document.getElementById('textBox');
//     fs.writeFile(notesJson, textBox.innerHTML, function(err){
//         if(!err){
//             callback('Note saved!');
//         }else{
//             console.log(err);
//             callback();
//         }
//     })
// }