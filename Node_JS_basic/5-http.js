const http = require('http');
const fs = require('fs');

// Define the countStudents function directly in this file
function countStudents(path) {
    return new Promise((resolve, reject) => {
        // Read the file asynchronously
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                // If there's an error loading the database, reject the promise with an error
                reject(new Error('Cannot load the database'));
                return;
            }

            // Split the file content into lines and filter out empty lines
            const lines = data.split('\n').filter(line => line.trim() !== ''); 

            // Object to store the number of students per field
            const fieldsCount = {};

            // Iterate over each line of the CSV file
            lines.forEach((line, index) => {
                if (index === 0) return; // Skip the first line containing the header

                // Split the data of each student into an array
                const [firstname, lastname, age, field] = line.replace(/\r/g, '').split(',');
                
                // Count students per field
                if (fieldsCount[field]) {
                    fieldsCount[field].count++;
                    fieldsCount[field].names.push(firstname);
                } else {
                    fieldsCount[field] = {
                        count: 1,
                        names: [firstname]
                    };
                }
            });

            // Get the total number of students
            const totalStudents = Object.values(fieldsCount).reduce((total, field) => total + field.count, 0);

            // Resolve the promise with the total number of students and the fieldsCount object
            resolve({ totalStudents, fieldsCount });
        });
    });
}

// Create the HTTP server
const app = http.createServer((req, res) => {
    if (req.url === '/') {
        // Respond with "Hello Holberton School!" for the root path
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {

        // Handle requests for the /students path
        // Call the countStudents function passing the path of the database file
        countStudents('database.csv')
        .then(({ totalStudents, fieldsCount }) => {
            // Respond with the student data
            res.writeHead(200, { 'Content-Type': 'text/plain'});
                res.write('This is the list of our students');
                res.write(`Number of students: ${totalStudents}`);
                for (const field in fieldsCount) {
                    const { count, names } = fieldsCount[field];
                    res.write(`Number of students in ${field}: ${count}. List: ${names.join(', ')}`);
                }
                res.end();
            })
            .catch((error) => {
                // Handle the error if the database cannot be loaded
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                console.error(error.message);
            });
    } else {
        // Respond with 404 Not Found for other paths
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Start the server listening on port 1245
const port = 1245;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});

// Export the app
module.exports = app;
