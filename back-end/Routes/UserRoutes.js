const { Router } = require("express");
const UserModel = require("../Models/UserModel");
const SignUpInputValidator = require('../Middlewares/SignupMiddleware')
const validateLoginInput = require('../Middlewares/Loginmiddleware')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserRouter = Router();

UserRouter.get("/", async (req, res) => {
    try{
      let all_users = await UserModel.find();
      res.send(all_users);
    }catch(e){
     res.send({msg:e,Error : "server Error"})
    }
});
UserRouter.post("/reg",SignUpInputValidator,async (req, res) => {
  const { first_name, last_name, email, phone, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        console.log(err);
        res.send({ msg: err });
      } else {
        const ExistingUser = await UserModel.findOne({ email });
        if (ExistingUser) {
          res.send({ msg: "User Already Exist" });
        } else {
          const user = new UserModel({
            first_name,
            last_name,
            email,
            phone,
            password: hash,
          });
          await user.save();
          res.send({ msg: "user Registered", user: user });
        }
      }
    });
  } catch (e) {
    console.log(e);
    res.send({ msg: e });
  }
});

UserRouter.post("/login",validateLoginInput, async (req, res) => {
  const { email, password } = req.body;
  try {
    let User = await UserModel.find({ email: email });
    if (User.length > 0) {
      bcrypt.compare(password, User[0].password, (err, result) => {
        if (result) {
          var token = jwt.sign({ userID: User[0]._id }, process.env.key);
          res.send({ msg: "Login SuccessFull", token: token, user: User });
        } else {
          res.send({ msg: "Wrong Password" });
        }
      });
    } else {
      res.send({ msg: "User Not Exist" });
    }
  } catch (e) {
    res.send({ msg: e });
  }
});

UserRouter.patch("/password/:id", async (req, res) => {
  const { currentpassword, newpassword } = req.body;
  const id = req.params.id;
  try {
    let User = await UserModel.findById(id);
    if (User.password) {
        //   check current password.
      bcrypt.compare(currentpassword, User.password, (err, result) => {
        if (result) {
            try {
                bcrypt.hash(newpassword, 5, async (err, hash) => {
                  if (err) {
                    console.log(err);
                    res.send({ msg: err });
                  } else {
                    // updating Password Here
                    await UserModel.findByIdAndUpdate(id, { password: hash });
                    res.send({ msg: "Updated" });
                  }
                });
              } catch (e) {
                console.log(e);
                res.send({ msg: e });
                return;
              }
        } else {
          res.send({ msg: "Wrong Password" });
          return;
        }
      });
    } else {
      res.send({ msg: "User Not Exist" });
      return;
    }
  } catch (e) {
    res.send({ msg: e , error : "server Error"});
    return;
  }
  // Update
 
});
module.exports = UserRouter;
