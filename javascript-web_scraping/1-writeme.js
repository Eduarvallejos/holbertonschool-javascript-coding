#!/usr/bin/node

const fs = require('fs');

const filepath = process.argv[2];
const string = process.argv[3];

if (!filepath) {
  console.log('Error: invalid route');
  process.exit(1)
}

fs.writeFile(filepath, string, 'utf-8', (error) => {
  if (error) {
    console.log('An error occurred while writing to the file', error);
  }
});
