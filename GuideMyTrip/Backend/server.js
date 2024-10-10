const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const signup = require('./Routes/Signuproute');
const db=require('./db')
const login = require('./Routes/Loginroute');
const review = require('./Routes/Reviewroute');
const contactus = require('./Routes/Contactusroute');
const hireaguide = require('./Routes/Hireaguideroute');
db()




app.use(cors({origin:'http://localhost:5173'}));
app.use(express.json());
app.get('/',(req,res)=>{res.send('Server has started')});



app.use('/signup',signup);
app.use('/login',login);
app.use('/review',review);
app.use('/contactus',contactus);
app.use('/hireaguide',hireaguide);


app.listen(port,() =>{
    console.log(`Server running on ${port}`)
})
