#!/usr/bin/node
//This script reads and prints a file

const fs = require('fs');

function readAndPrintFile (filePath) {
  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
      console.error('An error occurred while reading the file:', error);
    } else {
      console.log(data);
    }
  });
}

if (process.argv.length < 3) {
  console.log('Usage: node script_name.js file_path');
} else {
  const filePath = process.argv[2];
  readAndPrintFile(filePath);
}

