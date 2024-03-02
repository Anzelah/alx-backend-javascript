const readDatabase = require('../utils.js');

class StudentsController {
  static getAllStudents(request, response) {
    console.log('code a');
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
    const field = request.params.major;
    readDatabase(process.argv[2].toString()).then((results) => {

      let res;
      if (field === 'CS') {
        res = results.split('\n')[1];
      } else if (field === 'SWE') {
        res = results.split('\n')[2];
      }

      const start = res.indexOf('List: ') + 'List: '.length;
      const str = res.substring(start);
      
      if (!field) {
        response.status(500).send('Major parameter must be CS or SWE');
      } else {
        response.status(200).send(`List: ${str}`);
      }
    }).catch((err) => {
      response.status(500).send('Cannot load the database');
      console.error(err);
    });
    console.log('code 3');
  }
}

module.exports = StudentsController;
