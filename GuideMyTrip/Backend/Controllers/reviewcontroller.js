const Review = require('../models/review')
const getreview = async (req,res) =>{
    try{
    const reviews = await Review.find()
    return res.status(200).json(reviews)
}
catch(error){
    console.log(error)
    return res.status(500).json({message:"internal server error"})
}
}
const postreview = async (req,res) =>{
    const {title,name,comment,rating}=req.body
    try{
        const result = await Review.create({
            title:title,
            name:name,
            comment:comment,
            rating:rating
        })
        return res.status(200).json({message:"review as been posted",result})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({message:"internal server error"})
    }
}

module.exports = {getreview,postreview}