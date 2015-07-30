'use strict'

var fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf8');

var allLines = []

process.stdin.on('data', function(chunk) {
    var lines = chunk.split("\n");
    allLines = allLines.concat(lines);
    // console.log(allLines);
});

process.stdin.on('end', function() {
    console.log(__dirname + '/dps.txt');
  //   console.log(fs.readFileSync(__dirname + "/dps", function(err, file){
  //     if(err) { console.log('error', err) }
  //     console.log(file);
  // }));
    fs.readFile(__dirname + '/dps.txt', function (err, data) {
      if (err) throw err;
      data = data + '';
      var ids = data.split('\n');
      ids.pop();
      console.log(ids);
    });
    
    console.log(process.argv);

    // allLines = allLines.filter(function(line) 
    //   return ;
    // });
    console.log(allLines.length);
    console.log('ennnnnddddd');
});

