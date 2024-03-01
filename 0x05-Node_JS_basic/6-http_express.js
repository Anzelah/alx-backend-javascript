const express = require('express');
const app = express();

app.use((request, response) => {
  response.json({message: 'Hello Holberton School!'});
});
app.set('port', 1245);


module.exports = app;
