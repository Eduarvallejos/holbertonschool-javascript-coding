const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
    // Set the response headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Write the response body
    res.end('Hello Holberton School!\n');
});

// Make the server listen on port 1245
const port = 1245;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});

// Export the app
module.exports = app;
