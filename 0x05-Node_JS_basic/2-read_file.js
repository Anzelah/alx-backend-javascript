const fs = require('fs');

function countStudents(path) {
  const content = {}; //holds student names for each study field
  const fields = {}; //keeps count for each study field

  try {
    const data = fs.readFileSync(path, 'utf8');
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
    console.log(content);
    for (const key of Object.keys(fields)) {
      if (key !== fields) {
        console.log(`Number of students in ${key}: ${fields[key]}. List: ${content[key].join(', ')}`)
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  };
}

module.exports = countStudents;
