const fs = require('fs');

function readDatabase(path) {
  const content = {};
  const fields = {};

  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const rows = data.trim().split('\n');
      const results = [`Number of students: ${rows.slice(1).length}`];

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
        if (key !== 'fields') {
          results.push(`Number of students in ${key}: ${fields[key]}. List: ${content[key].join(', ')}`);
        }
      }
      resolve(results.join('\n'));
    });
  });
}

module.exports = readDatabase;
