const mongoose = require('mongoose');

const requestschema= new mongoose.Schema({
   name:String,
   contactno:Number,
   email:String,
   destination:String,
   numberofdays:Number,
   preferedlanguage:String,
   gender:String,
})

const request = mongoose.model('request',requestschema);
module.exports = request;