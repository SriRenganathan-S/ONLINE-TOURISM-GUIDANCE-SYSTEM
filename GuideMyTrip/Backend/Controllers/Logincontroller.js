const User = require('../models/user')
const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({
            "email": email
        })
        if (!user) {
            return res.status(402).json({
                message: "Invalid email address"
            })
        }
        if(user.password !== password){
            return res.status(402).json({
                message: "Incorrect password"
            })
        }
        return res.status(200).json({
            message: "Login successful",
            user 
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "internal server error"
        })
    }
}

module.exports = {login}
