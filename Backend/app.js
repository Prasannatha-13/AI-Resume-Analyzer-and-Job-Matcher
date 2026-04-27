const express = require('express')
const  cors =require('cors')
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const  UserModel =require('./mongo.js')
// require('dotenv').config();

const app=express();

app.use(cors())
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("welcome");
})



app.listen(3000,()=>{
    console.log("your server is running")
})