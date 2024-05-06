const fs = require('fs');

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

            // Print the total number of students
            console.log(`Number of students: ${totalStudents}`);

            // Print the number of students per field and the list of student names in that field
            for (const field in fieldsCount) {
                const { count, names } = fieldsCount[field];
                console.log(`Number of students in ${field}: ${count}. List: ${names.join(', ')}`);
            }

            // Resolve the promise
            resolve();
        });
    });
}

module.exports = countStudents;
