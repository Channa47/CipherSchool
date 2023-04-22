const { Router } = require("express");
const MoreInfoModel = require("../Models/MoreInfoModel");
const UserModel = require("../Models/UserModel");
const AddMore = Router();

AddMore.get("/details/:userid", async (req, res) => {
  let userid = req.params.userid;
  try {
    let Details = await MoreInfoModel.find({ userid: userid });
    res.send({ msg: "success", data: Details });
  } catch (e) {
    res.send({ msg: "Error" });
  }
});

AddMore.post("/details/:userid", async (req, res) => {
  let userid = req.params.userid;
  let EmptyPayload = {
    userid: userid,
    description: "",
    links: {
      linkedin: "",
      github: "",
      facebook: "",
      instagram: "",
      website: "",
    },
    profession_info: {
      Highest_education: "",
      Current_occupation: "",
    },
    interest: [],
    fallowers: [
      "64424b5438a54597a3a018f7",
      "6442736ccce5f8177c6b88e8",
      "64427395cce5f8177c6b88eb",
      "644273a7cce5f8177c6b88ee",
      "644273b8cce5f8177c6b88f1",
      "644273c5cce5f8177c6b88f4",
      "644273cfcce5f8177c6b88f7",
      "644273d9cce5f8177c6b88fa",
      "644273e9cce5f8177c6b88fd",
      "644273f9cce5f8177c6b8900",
    ],
    // For presentation purpose adding 10 fallowers to each user initially .
  };
  try {
    let prevData = await MoreInfoModel.find({ userid: userid });
    if (prevData.length > 0) {
      res.send({ msg: "Already initialised" });
      return;
    } else {
      let Details = new MoreInfoModel(EmptyPayload);
      await Details.save();
      res.send({ msg: "Empty initilisation", data: Details });
    }
  } catch (e) {
    res.send({ msg: "error", data: e });
  }
});

AddMore.patch("/details/:id", async (req, res) => {
  let id = req.params.id;
  let type = req.query.type;
  try {
    if (type === "description") {
      const { description } = req.body;
      await MoreInfoModel.findByIdAndUpdate(id, { description: description });
      res.send("Done");
    } else if (type === "links") {
      const { links } = req.body;
      await MoreInfoModel.findByIdAndUpdate(id, { links: links });
      res.send("Done");
    } else if (type === "profession_info") {
      const { profession_info } = req.body;
      await MoreInfoModel.findByIdAndUpdate(id, {
        profession_info: profession_info,
      });
      res.send("Done");
    } else if (type === "interest") {
      const { interest } = req.body;
      await MoreInfoModel.findByIdAndUpdate(id, { interest: interest });
      res.send("Done");
    } else if (type === "fallowers") {
      const { fallowers } = req.body;
      await MoreInfoModel.findByIdAndUpdate(id, { fallowers: fallowers });
      res.send("Done");
    } else {
      res.send("Not Found");
    }
  } catch (e) {
    res.send({ msg: "Server Error" });
  }
});

// Fallowers Get Route;
AddMore.get("/fallowers/:userid", async (req, res) => {
  let userid = req.params.userid;
 
  try {
    let Alluser = await UserModel.find();
    let Current_user_info = await MoreInfoModel.find({ userid: userid });
    let fallowers_ids = Current_user_info[0].fallowers;
    const Main_data = Alluser.filter((obj) => fallowers_ids.includes(obj._id));
    const { page = 1, limit = Main_data.length } = req.query;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const result = Main_data.slice(startIndex, endIndex);
    res.send(result);
  } catch (e) {
    console.log(e);
    res.send({ msg: "error" });
  }
});

module.exports = AddMore;
