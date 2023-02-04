const Student = require('../models/studentModel')

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
    const { UID, fName, mName, lName, age, mobile, email, schoolName, schoolAddress, standard, country, state, district, address1, address2, pinCode } = req.body

    try {
        const student = await Student.entryData(UID, fName, mName, lName, age, mobile, email, schoolName, schoolAddress, standard, country, state, district, address1, address2, pinCode)

        res.status(200).json({ UID: student.UID, firstName: student.fName, middleName: student.mName, lastName: student.lName })
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
    const { UID, fName, mName, lName, age, mobile, email, schoolName, schoolAddress, standard, country, state, district, address1, address2, pinCode } = req.body

    try {
        const student = await Student.updateOne({ UID: UID }, { UID, fName, mName, lName, age, mobile, email, schoolName, schoolAddress, standard, country, state, district, address1, address2, pinCode })

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
    insertManyEntries
}