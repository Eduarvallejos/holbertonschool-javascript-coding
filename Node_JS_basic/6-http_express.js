const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root path '/'
app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

// Start the server listening on port 1245
const port = 1245;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});

// Export the app
module.exports = app;