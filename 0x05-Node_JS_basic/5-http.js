const http = require('http');
const { readFileAsync } = require('./3-read_file_async');
const countStudents = require('./2-read_file');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    countStudents(process.argv[2]).then(() => {
      readFileAsync('./database.csv','utf8', (err, data) => {
        if (err) {
	  console.error('Error reading file');
          res.write('Internal Server Error');
          res.end();
        } else {
	  console.log(data);
          res.write(`This is the list of our students\n${data.split('\n')}`);
          res.end();
        }
    });
  });
}
});
app.listen(1245);

module.exports = app;
