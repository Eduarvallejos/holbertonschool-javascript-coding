#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath) {
  console.log('Error: Provide the URL and path of the destination file.');
} else {
  request.get(url, (error, response, body) => {
    if (error) {
      console.log('Error:', error);
    } else if (response.statusCode !== 200) {
      console.log('Error:', response.statusCode);
    } else {
      fs.writeFile(filePath, body, 'utf-8', (err) => {
        if (err) {
          console.log('Error writing to file:', err);
        } else {
          console.log('Webpage content saved to', filePath);
        }
      });
    }
  });
}
