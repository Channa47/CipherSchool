const express = require('express');
const cors = require('cors');
require('dotenv').config;
const connection = require('./config/db')



const app = express();
app.use(express.json());
app.use(cors({origin:"*"}));


app.listen(process.env.port,async()=>{
    try{
      connection;
      console.log("Connected To DB")
    }catch(e){
      console.log("error",{error:e})
    }
    console.log("Running!")
})