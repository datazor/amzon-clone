
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import user from './models/user.models.js';
import jwt from 'jsonwebtoken';

const app = express() 


mongoose.connect('mongodb+srv://tejmakht:tejmakhtonrails007@cluster0.aiotyik.mongodb.net/UserBB?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}, (err, db) => {
    if(!err) {
      console.log('connected');
    } else {
      console.error('error connecting to db',err);
    }
});

app.use(cors())     
app.use(express.json())
 
app.post('/api/register' , async (req,res)=>{

    console.log(req.body )
    const userdata = req.body
    const newUser = new user(userdata);
    var x = new Boolean(false);
    user.findOne({ email: userdata.email }).then((user) => {
    if (user)
    { return res.status(400).json("User already exists")}
  else{
            console.log(user)
            newUser.save()
             
            .then(
              
              console.log("sucessfully"),
              
              x=true 
              
              
            )
            .catch(
              x=false,
              (err) => console.log(err));
       
            }  

            return res.json({status:'ok' , user: true});

    });
})

app.post('/api/login' , async (req,res)=>{

   const loger = await user.findOne({
    email:req.body.email,
    password: req.body.password,
  })

  

  if(loger){

    const token = jwt.sign({  
      name:loger.name,
      email:loger.email,

    },'secret32563256')

    return res.json({status:'ok' , user: token})
  } 
  else{
   return res.json({status: 'error' , user: false })
  }
})



app.listen(1337,()=>{

    console.log('Server started on 1337')
})