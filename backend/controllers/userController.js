const User = require('../models/userModel')

// login user controller
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}

// signup user controller
const signupUser = async (req, res) => {

    const { email, password } = req.body
    
    try {
        const user = await User.signup(email, password)

        res.status(200).json({email, user})
    } catch (error) {
        res.status(404).json({error: error.message})
    }
    // res.json({mssg: 'signup user'})
}


module.exports = { loginUser, signupUser }