const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentSchema = new Schema({
    UID: { type: Number },
    fName: { type: String, min: 3, max: 25 },
    mName: { type: String, max: 30 },
    lName: { type: String, max: 25 },
    age: { type: Number },
    mobile: { type: Number },
    email: { type: String },
    schoolName: { type: String, max: 200 },
    schoolAddress: { type: String },
    standard: { type: String },
    country: { type: String },
    state: { type: String },
    district: { type: String },
    address1: { type: String, max: 100 },
    address2: { type: String, max: 100 },
    pinCode: { type: Number },
    stream: {type: String, default: ''} //
});

// static entryData method
studentSchema.statics.entryData = async function (UID, fName, mName, lName, age, mobile, email, schoolName, schoolAddress, standard, country, state, district, address1, address2, pinCode) {

    const exists = await this.findOne({ UID })

    if (exists) {
        throw Error('Student already registered!')
    }

    const student = await this.create({ UID, fName, mName, lName, age, mobile, email, schoolName, schoolAddress, standard, country, state, district, address1, address2, pinCode })

    return student
}

module.exports = mongoose.model('Student', studentSchema)