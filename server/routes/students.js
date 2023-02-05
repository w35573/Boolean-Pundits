const express = require('express');

// controller functions
const { getStudentById, enterStudent, getAllStudents, updateStudent, deleteStudent, insertManyEntries, loginStudent, signupStudent, updateHours } = require('../controllers/studentController');

const router = express.Router()

// get student by id
router.get('/get/:email', getStudentById)

// get all students
router.get('/getAll', getAllStudents)

// login route
router.post('/login', loginStudent)

// signup route
router.post('/signup', signupStudent)

// student entry route
router.post('/entry', enterStudent)

// student insert all
router.post('/enterAll', insertManyEntries)

// update student info
router.patch('/update', updateStudent)

// delete student route
router.delete('/delete', deleteStudent)


module.exports = router