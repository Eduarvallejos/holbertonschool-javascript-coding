#!/usr/bin/node
// This script calculates the number of completed tasks per user ID.


const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
  console.log('Error: Please provide the API URL.');
} else {
  request.get(apiUrl, (error, response, body) => {
    if (error) {
      console.log('Error:', error);
    } else if (response.statusCode !== 200) {
      console.log('Error:', response.statusCode);
    } else {
      const todos = JSON.parse(body);
      const completedTasksByUser = {};

      todos.forEach(todo => {
        if (todo.completed) {
          if (completedTasksByUser[todo.userId]) {
            completedTasksByUser[todo.userId]++;
          } else {
            completedTasksByUser[todo.userId] = 1;
          }
        }
      });

      console.log(completedTasksByUser);
    }
  });
};

