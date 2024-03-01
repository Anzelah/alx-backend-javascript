const http = require('http');

const app = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/any_endpoint') {
    res.write('Hello Holberton School!');
    res.end();
  }
});
app.listen(1245);

module.exports = app;
