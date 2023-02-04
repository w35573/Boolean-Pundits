const Student = require('../models/studentModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({ _id }, `${process.env.SECRET}`, { expiresIn: '3d' })
}

// login a student
const loginStudent = async (req, res) => {
    const { email, password } = req.body

    try {
        const student = await Student.login(email, password)

        // create a token
        const token = createToken(student._id)

        res.status(200).json({ id: student._id, email, token, role: student.role })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// signup a student
const signupStudent = async (req, res) => {
    const { email, password } = req.body

    try {
        const student = await Student.signup(email, password)

        // create a token
        const token = createToken(student._id)

        res.status(200).json({ id: student._id, email, token, role: student.role })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getStudentById = async (req, res) => {
    const { uid } = req.params;

    try {
        const student = await Student.findOne({ UID: `${uid}` });
        console.log(student);

        res.status(200).json({ student });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//get all students details
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find({})
        res.status(200).json({ students })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// enter student details
const enterStudent = async (req, res) => {
    const { UID, email, password, fName, mName, lName, age, gender, mobile, schoolName, schoolAddress, standard, country, state, district, address1, address2, pinCode, stream } = req.body

    try {
        const student = await Student.entryData(UID, email, password, fName, mName, lName, age, gender, mobile, schoolName, schoolAddress, standard, country, state, district, address1, address2, pinCode, stream)

        res.status(200).json({ UID: student.UID, email: student.email, password: student.password, role: student.role })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// insert many entries
const insertManyEntries = async (req, res) => {
    const { students } = req.body

    try {
        const data = await Student.insertMany(students)

        res.status(200).json({ data })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// update Student
const updateStudent = async (req, res) => {
    const { UID, email, password, fName, mName, lName, age, gender, mobile, schoolName, schoolAddress, standard, country, state, district, address1, address2, pinCode, stream } = req.body

    try {
        const student = await Student.updateOne({ UID: UID }, { UID, email, password, fName, mName, lName, age, gender, mobile, schoolName, schoolAddress, standard, country, state, district, address1, address2, pinCode, stream })

        res.status(200).json({ student })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// delete Student
const deleteStudent = async (req, res) => {
    const { UID } = req.body;

    try {
        Student.findOneAndDelete({ UID: UID }, (err, student) => {
            if (err) {
                res.status(400).json({ status: 404, error: err.message });
            } else {
                res.status(200).json({ status: 200, student });
            }
        })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getStudentById,
    getAllStudents,
    enterStudent,
    updateStudent,
    deleteStudent,
    insertManyEntries,
    loginStudent,
    signupStudent
}