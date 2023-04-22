const express = require('express');
const cors = require('cors');
require('dotenv').config;
const connection = require('./config/db')
const UserRouter = require("./Routes/UserRoutes");
const ImageUpload = require("./Routes/uploadRoute");
const AddMore = require('./Routes/MoreInfoRoute');

const app = express();
// Routes
app.use(express.json());
app.use("/user",UserRouter)
app.use("/profile",ImageUpload);
app.use("/info",AddMore)
app.use(cors({origin:"*"}));


app.get('/',(req,res)=>{
  const data = [
    "To register = /user/reg",
    "To login = /user/login",
    "To Upload_profile_pic = /profile/uploads/:id",
    "To Get the Profile picture = /profile.:userid",
    "To get/post More Details of user = /info/details/:userid",
    "To update user info =/info/details/:id?type=description",
    "To get fallowers = /info/fallowers/:userid?page=1&limit=2"
  ];

  res.setHeader("Content-Type", "text/plain");

  data.forEach((line) => {
    res.write(`${line}\n`);
  });
  res.end();
})

app.listen(process.env.port,async()=>{
    try{
      connection;
      console.log("Connected To DB")
    }catch(e){
      console.log("error",{error:e})
    }
    console.log("Running!")
})