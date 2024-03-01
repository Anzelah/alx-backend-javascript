const http = require('http');
const { readFileAsync } = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    readFileAsync('./database.csv','utf8', (err, data) => {
      if (err) {
	console.error('Error reading file');
        res.write('Internal Server Error');
        res.end();
      } else {
        res.write(`This is the list of our students\n${data}`);
        res.end();
      }
    });
  }
});
app.listen(1245);

module.exports = app;
