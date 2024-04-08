#!/usr/bin/node
// Status code

const request = require('request');
const url = process.argv[2];

if (!url) {
  console.log('provide a url');
  process.exit(1);
}

request.get(url, (err, response) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`code: ${response.statusCode}`);
});

