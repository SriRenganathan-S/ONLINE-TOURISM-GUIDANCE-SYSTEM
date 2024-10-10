const Feedback = require('../models/feedback');

const postFeedback = async (req,res) =>{
    const {name,email,comment} = req.body
    try{
        await Feedback.create({
            name:name,
            email:email,
            comment:comment
        })
        return res.status(200).json({
            message:'Feedback has been sent or recorded'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'Unable to send the feedback'
        })
    }
} 

module.exports = {postFeedback}
