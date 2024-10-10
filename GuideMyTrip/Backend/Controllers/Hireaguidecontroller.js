const request = require('../models/request');

const postrequest = async (req,res) =>{
    const {name,contactno,email, destination,numberofdays, preferedlanguage,gender} = req.body
    try{
        await request.create({
            name:name,
            contactno:contactno,
            email:email,
            destination:destination,
            numberofdays:numberofdays,
            preferedlanguage:preferedlanguage,
            gender:gender
        })
        return res.status(200).json({
            message:'request has been sent or recorded'
        })
    }
    catch(error){
        return res.status(500).json({
            message:'Unable to send the request'
        })
    }
} 

module.exports = {postrequest}