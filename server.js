'use strict'

var fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf8');

var allLines = [];

process.stdin.on('data', function(chunk) {
    var lines = chunk.split("\n");
    allLines = allLines.concat(lines);
    // console.log(allLines);
});

process.stdin.on('end', function() {

    var dps = fs.readFileSync(__dirname + '/dps.txt');
    var dps = dps + '';
    var ids = dps.split('\n');
    ids.pop(); 

    console.log(allLines.length);  
    
    allLines = allLines.filter(function(line){
      var keep = true;
      ids.forEach(function(id){
        if (line.search(id) != -1) {
          keep = false;
        }
      });
      return keep;
    });

    var newFile = fs.createWriteStream('newFile.txt');
    allLines.forEach(function(line){
      newFile.write(line + '\n'); 
    });

    console.log(allLines.length);
    console.log('ennnnnddddd');

});


