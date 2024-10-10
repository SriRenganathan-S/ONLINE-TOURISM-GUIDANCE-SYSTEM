const mongoose = require('mongoose');

const reviewschema= new mongoose.Schema({
   title:String,
   name:String,
   comment:String,
   rating:Number,
   time:{type:Date,default:Date.now} 
})

const Review = mongoose.model('Review',reviewschema);
module.exports = Review;


