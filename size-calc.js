var gzipSize = require('gzip-size');
var fs = require('fs');
var prettyBytes = require('pretty-bytes');

var contents = fs.readFileSync('./exports/min/ventana.js');
var kb = prettyBytes(gzipSize.sync(contents));
var msg = 'ventana.js is ' + kb + ' gzipped.';

fs.writeFileSync('./exports/min/stats.txt', msg);

console.log(msg);
