const fs = require('fs');

function countStudents(path) {
    try {
        // Read the CSV file synchronously
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n').filter(line => line.trim() !== ''); // Filter empty lines

        // Object to store the number of students per field
        const fieldsCount = {};

        // Iterate through each line of the CSV file
        lines.forEach((line, index) => {
            // Skip the first line containing the header
            if (index === 0) return;

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
    } catch (error) {
        // If there is an error loading the database, throw an error
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
