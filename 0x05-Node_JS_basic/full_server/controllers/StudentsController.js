const readDatabase = require('../utils.js');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase((err, data) => {
      if (err) {
        response.statusCode = 500;
        response.send('Cannot load the database');
        console.error(err);
      } else {
        response.statusCode = 200;
        response.send(`This is the list of our students\n${data}`);
      }
    });
  }
  
  static getAllStudentsByMajor(request, response) {
    if (request.params.major !== CS && request.params.major !== SWE) {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase((err, data) => {
        if (err) {
          response.status(500).send('Cannot load the database');
       	  console.error(err);
        } else {
          response.status(200).send(`List: ${data}`);
	}
      });
    }
  }
}

module.exports = StudentsController;
