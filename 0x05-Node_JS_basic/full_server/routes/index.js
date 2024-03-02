const express = require('express');
const router = express.Router();

const appControl = require('../controllers/AppController');
const studentControl = require('../controllers/StudentsController');

router.get('/', appControl.getHomepage);
router.get('/students', studentControl.getAllStudents);
router.get('/students/:major', studentControl.getAllStudentsByMajor);


module.exports = router;
