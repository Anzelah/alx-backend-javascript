const fs = require('fs').promises;

async function countStudents(path) {
  const content = {};
  const fields = {};

  try {
    const data = await fs.readFile(path, 'utf8');
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
        console.log(`Number of students in ${key}: ${fields[key]}. List: ${content[key].join(', ')}`)
      }
    }
  } catch (err) {
    console.log('Cannot load the database');
  };
}

module.exports = countStudents;
