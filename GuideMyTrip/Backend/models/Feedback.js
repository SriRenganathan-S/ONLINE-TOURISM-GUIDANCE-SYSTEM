const mongoose = require('mongoose');

const Feedbackschema= new mongoose.Schema({
   name:String,
   email:String,
   comment:String,
})

const Feedback = mongoose.model('Feedback',Feedbackschema);
module.exports = Feedback;