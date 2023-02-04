const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const studentSchema = new Schema({
    UID: { type: Number, unique: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    fName: { type: String, min: 3, max: 25 },
    mName: { type: String, max: 30 },
    lName: { type: String, max: 25 },
    age: { type: Number },
    gender: { type: String },
    mobile: { type: Number },
    schoolName: { type: String, max: 200 },
    schoolAddress: { type: String },
    standard: { type: String },
    country: { type: String },
    state: { type: String },
    district: { type: String },
    address1: { type: String, max: 100 },
    address2: { type: String, max: 100 },
    pinCode: { type: Number },
    stream: { type: String, default: '' },
    role: { type: String, default: 'student' } //10th and all
});

// static entryData method
studentSchema.statics.entryData = async function (UID, email, password, fName, mName, lName, age, gender, mobile, schoolName, schoolAddress, standard, country, state, district, address1, address2, pinCode, stream) {

    const exists = await this.findOne({ UID })

    if (exists) {
        throw Error('Student already registered!')
    }

    const student = await this.create({ UID, email, password, fName, mName, lName, age, gender, mobile, schoolName, schoolAddress, standard, country, state, district, address1, address2, pinCode, stream })

    return student
}

// static signup method
studentSchema.statics.signup = async function (email, password) {

    // validation
    if (!email || !password) {
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email not valid')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }

    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const student = await this.create({ email, password: hash })

    return student
}

// static login method
studentSchema.statics.login = async function (email, password) {

    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    const student = await this.findOne({ email })
    if (!student) {
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, student.password)
    if (!match) {
        throw Error('Incorrect password')
    }

    return student
}

module.exports = mongoose.model('Student', studentSchema)