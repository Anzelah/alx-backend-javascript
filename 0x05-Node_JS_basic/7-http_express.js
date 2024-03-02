const express = require('express');
const fs = require('fs').promises;

const app = express();


function countStudents(path) {
  const content = {};
  const fields = {};

  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(err);
    } else {
      const rows = data.trim().split('\n');
      console.log(`Number of students: ${rows.slice(1).length}`);

      rows.slice(1).forEach((row) => {
        if (row.trim() !== '') {
          const values = row.split(',');
        
          if (content[values[3]]) {
            content[values[3]].push(values[0]);
          } else {
            content[values[3]] = [values[0]];
          }

          if (fields[values[3]]) {
            fields[values[3]] += 1;
          } else {
            fields[values[3]] = 1;
	  }
	}
      });

      for (const key of Object.keys(fields)) {
        if (key !== fields) {
          const results = (`Number of students in ${key}: ${fields[key]}. List: ${content[key].join(', ')}`);
        }
      }
      resolve(output);
    }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.listen(1245);

module.exports = app;
