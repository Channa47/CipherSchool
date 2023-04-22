
const AvatarModel = require('../Models/AvatarModel')
const validateUserUpload = require('../Middlewares/UploadMiddleware')

const { Router } = require("express");
const multer = require("multer");

const ImageUpload = Router();
const upload = multer({ storage: multer.memoryStorage() });

ImageUpload.post("/uploads/:id", upload.single("file"),validateUserUpload, async (req, res) => {
    const  userid  = req.params.id;
    const { originalname, mimetype, buffer } = req.file;
    var base64Data = "";
    for (var i = 0; i < buffer.length; i++) {
      base64Data += String.fromCharCode(buffer[i]);
    }
    var url = "data:image/jpeg;base64," + btoa(base64Data);
    try {
      let ALreadyExistingProfile = await AvatarModel.find({ userid: userid });
      if (ALreadyExistingProfile.length > 0) {
        await AvatarModel.findByIdAndUpdate(ALreadyExistingProfile[0]._id, {
          image_url: url,
        });
        let updated = await AvatarModel.findById(ALreadyExistingProfile[0]._id);
        res.send({ msg: "update", data: updated });
        return;
      }
      const file = new AvatarModel({
        userid: userid,
        image_url: url,
      });
      await file.save();
      res.send({ message: "File uploaded successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Server error" });
    }
  });
  
  ImageUpload.get("/:userid",async(req,res)=>{
    const userid = req.params.userid;
    try{
       let data = await AvatarModel.find({userid:userid});
       if(data.length>0){
         res.send({msg:"Profile Picture", data : data[0]});
       }else{
        res.send({msg:"No Profile Picture Found" , data : {}})
       }
    }catch(e){
     res.send({msg:"Error"})
    }
  })

  module.exports = ImageUpload