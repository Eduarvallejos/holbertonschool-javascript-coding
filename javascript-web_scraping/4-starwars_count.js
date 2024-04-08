#!/usr/bin/node
// This script prints the number of movies where the character 'Wedge Antilles' is present.

const request = require('request');

const url = process.argv[2];
const idPeople = 'https://swapi-api.hbtn.io/api/people/18/';

if (!url) {
  console.log('Please provide the API URL of the Star Wars API.');
  process.exit(1);
}

request(url, function (err, response, body) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  if (response.statusCode === 200) {
    const charactersTotal = JSON.parse(body);
    const n = [];
    for (let i = 0; i < charactersTotal.count; i++) {
      n.push(...charactersTotal.results[i].characters);
    }
    console.log(n.filter((v) => v === idPeople).length);
  } else {
    console.log(`Error: ${response.statusCode}`);
  }
});
