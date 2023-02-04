const Admin = require('../models/adminModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({ _id }, `${process.env.SECRET}`, { expiresIn: '3d' })
}

// login a user
const loginAdmin = async (req, res) => {
    const { email, password } = req.body

    try {
        const admin = await Admin.login(email, password)

        // create a token
        const token = createToken(admin._id)

        res.status(200).json({ id: admin._id, email, token, role: admin.role })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// // signup a user
const signupAdmin = async (req, res) => {
    const { email, password } = req.body

    try {
        const admin = await Admin.signup(email, password)

        // create a token
        const token = createToken(admin._id)

        res.status(200).json({ id: admin._id, email, token, role: admin.role, status: admin.status })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// // update Profile
// const updateProfile = async (req, res) => {
//     const { _id, username, fname, lname, mobile, country, state, district, address1, address2, pincode } = req.body

//     try {
//         const user = await User.updateOne({ _id: _id }, { username, fname, lname, mobile, country, state, district, address1, address2, pincode })

//         res.status(200).json({ user })
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }

// // delete Profile
// const deleteProfile = async (req, res) => {
//     const { _id } = req.body;

//     try {
//         User.findOneAndDelete({ _id: _id }, (err, user) => {
//             if (err) {
//                 res.status(400).json({ status: 404, error: err.message });
//             } else {
//                 res.status(200).json({ status: 200, user });
//             }
//         })
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }


// // get user by _id

// const getUserById = async (req, res) => {
//     const { _id } = req.params;

//     try {
//         const user = User.findOne({ _id: `${_id}` });
//         console.log(user);

//         res.status(200).json({ user });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }


// //get all users details

// const getUsers = async (req, res) => {
//     try {
//         const users = await User.find({})
//         res.status(200).json({ users })
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// }

module.exports = { loginAdmin, signupAdmin };