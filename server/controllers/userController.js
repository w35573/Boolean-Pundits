const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({ _id }, `${process.env.SECRET}`, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({ id: user._id, email, token, role: user.role, status: user.status })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// signup a user
const signupUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.signup(email, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({ id: user._id, email, token, role: user.role, status: user.status })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// update Profile
const updateProfile = async (req, res) => {
    const { email, fname, mname, lname, age, gender, mobile, country, state, district, address1, address2, pinCode, hoursCompleted, highestQualification, stream } = req.body

    try {
        const user = await User.updateOne({ email: email }, { fname, mname, lname, age, gender, mobile, country, state, district, address1, address2, pinCode, hoursCompleted, highestQualification, stream })

        res.status(200).json({ user })

        console.log(user)

    } catch (error) {
        res.status(400).json({ error: error.message });

        console.log(error)
    }
}

// delete Profile
const deleteProfile = async (req, res) => {
    const { _id } = req.body;

    try {
        User.findOneAndDelete({ _id: _id }, (err, user) => {
            if (err) {
                res.status(400).json({ status: 404, error: err.message });
            } else {
                res.status(200).json({ status: 200, user });
            }
        })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


// get user by _id

const getUserById = async (req, res) => {
    const { _id } = req.params;

    try {
        const user = User.findOne({ _id: `${_id}` });
        console.log(user);

        res.status(200).json({ user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


//get all users details

const getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json({ users })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { signupUser, loginUser, updateProfile, deleteProfile, getUsers, getUserById };