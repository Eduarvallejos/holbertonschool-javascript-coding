#!/usr/bin/node
// This script gets the content of a web page and stores it in a file.

const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath) {
  console.log('Provide the URL and path of the destination file');
  process.exit(1);
}

request(url, (err, response, body) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  if (response.statusCode === 200) {
    fs.writeFile(filePath, body, 'utf-8', (err) => {
      if (err) {
        console.log(err);
      }
    });
  } else {
    console.log(`Error: ${response.statusCode}`);
  }
});
