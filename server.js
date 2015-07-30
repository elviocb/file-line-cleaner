'use strict'

var fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
    lines = chunk.split("\n");

    console.log(lines);
});

process.stdin.on('end', function() {
    console.log('ennnnnddddd');
});

