const User=require('../models/user');
const signup=async(req,res)=>{
    const {username,email,password}=req.body;
    try{
        const newuser=new User({
            username,email,password
        });
        await newuser.save();
        console.log(`username: ${username},email: ${username},password: ${username}`);
        res.json({message:'user created successfully'});
    }
    catch(error){
        console.error("error:",error);
        res.status(500).json({message:"error"});
    }
};
module.exports= {signup};