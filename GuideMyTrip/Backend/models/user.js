const mongoose = require('mongoose');



const userschema= new mongoose.Schema({
    email:{type:String},
    password:{type:String},
    username:{type:String},  
})

const User = mongoose.model('User',userschema);
module.exports = User;