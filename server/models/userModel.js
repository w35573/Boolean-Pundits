const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fname: { type: String, min: 3, max: 25 },
    mname: { type: String, max: 30 },
    lname: { type: String, max: 25 },
    age: { type: Number },
    gender: { type: String },
    mobile: { type: String, min: 10, max: 10 },
    country: { type: String },
    state: { type: String },
    district: { type: String },
    address1: { type: String, max: 100 },
    address2: { type: String, max: 100 },
    pinCode: { type: String, min: 6, max: 6 },
    profilePicture: { type: String, default: '' },
    hoursCompleted: { type: Number },
    highestQualification: { type: String },
    stream: { type: String, default: '' }, //10th and all
    //student, volunteer, admin
    role: { type: String, default: 'volunteer' },
    status: { type: String, default: 'pending' } //active, completed
})

// static signup method
userSchema.statics.signup = async function (email, password) {

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

    const user = await this.create({ email, password: hash })

    return user
}

// static login method
userSchema.statics.login = async function (email, password) {

    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({ email })
    if (!user) {
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error('Incorrect password')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)