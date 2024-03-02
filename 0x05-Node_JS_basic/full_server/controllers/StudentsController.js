const readDatabase = require('../utils.js');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2]).then((results) => {
      response.statusCode = 200;
      response.send(`This is the list of our students\n${results}`);
    }).catch((err) => {
      response.statusCode = 500;
      response.send('Cannot load the database');
      console.error(err);
    });
  }
  
  static getAllStudentsByMajor(request, response) {
    if (request.params.major !== CS && request.params.major !== SWE) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2]).then((results) => {
      response.status(200).send(`List: ${results}`);
    }).catch((err) => {
      response.status(500).send('Cannot load the database');
      console.error(err);
    });
  }
}

module.exports = StudentsController;
