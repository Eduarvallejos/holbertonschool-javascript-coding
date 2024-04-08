#!/usr/bin/node
// This script prints the number of movies where the character 'Wedge Antilles' is present.

const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
  console.log('Error: Please provide the API URL of the Star Wars API.');
} else {
  request.get(apiUrl, (error, response, body) => {
    if (error) {
      console.log('Error:', error);
    } else if (response.statusCode !== 200) {
      console.log('Error:', response.statusCode);
    } else {
      const films = JSON.parse(body).results;
      let count = [];
      films.forEach(film => {
        if (film.characters.includes('https://swapi-api.hbtn.io/api/people/18/')) {
          count++;
        }
      });
      console.log(count);
    }
  });
}
