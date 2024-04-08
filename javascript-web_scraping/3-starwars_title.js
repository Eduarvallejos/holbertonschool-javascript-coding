#!/usr/bin/node

const request = require('request');

const movieID = process.argv[2];

if (!movieID) {
  console.log('Error: Please provide a movie ID.');
} else {
  const url = `https://swapi-api.hbtn.io/api/films/${movieID}`;
  request.get(url, (error, response, body) => {
    if (error) {
      console.log('Error:', error);
    } else if (response.statusCode !== 200) {
      console.log('Error:', response.statusCode);
    } else {
      const movie = JSON.parse(body);
      console.log(movie.title);
    }
  });
}
