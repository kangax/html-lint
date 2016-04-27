#!/usr/bin/env node

'use strict';

var fs = require('fs');
var lint = require('.').lint;

function createReadStream(path) {
  if (path) {
    return fs.createReadStream(path, { encoding: 'utf8' });
  }
  process.stdin.setEncoding('utf8');
  return process.stdin;
}

var path = process.argv[2];
if (path === '-h' || path === '--help') {
  console.log('Usage: html-minifier-lint [file]');
}
else {
  var content = '';
  createReadStream(path).on('data', function(data) {
    content += data;
  }).on('end', function() {
    var output = lint(content);
    if (output) {
      console.log(output);
    }
  });
}
