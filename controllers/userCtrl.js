const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
// old way to test on Postman
//const userCtrl = {
//register:(req, res) =>{
//   res.json({msg: "Test Controllers"})}
// module.exports = userCtrl

const userCtrl = {
    register: async (req, res) =>{
        try {
            const {name, email, password} = req.body;

            const user = await Users.findOne({email})
            if(user) return res.status(400).json({msg: "The email already exists."})

            if(password.length < 6) 
                return res.status(400).json({msg: "Password is at least 6 characters long."})
           
           //Password Encryption
                res.json({msg:"Register Success!"})
            
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        }
    }

module.exports = userCtrl
