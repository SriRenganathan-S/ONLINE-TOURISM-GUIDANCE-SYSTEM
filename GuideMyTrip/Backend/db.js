const mongoose=require('mongoose');
const MONGO_URI ='mongodb://localhost:27017/guidemytrip';
const connectDB = async()=>{
    try{
        await mongoose.connect(MONGO_URI);
        console.log('mongodb connected successfully')
    }
    catch(error){
        console.error('connection error:',error);
    }
};
module.exports=connectDB;