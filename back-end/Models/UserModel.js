const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
      first_name :String,
      last_name : String,
      email : String,
      phone : Number,
      password : String,
});

const UserModel = mongoose.model("user",userSchema);

module.exports = UserModel;



// about : String,
// professional_info : {
//    highest_education : String,
//    accupation : String,
// },
// profile_image: {
//   name: String,
//   type: String,
//   size: Number,
//   data: Buffer,
// },
// links : {
//    linkedin : String,
//    github : String,
//    facebook : String,
//    twitter : String,
//    instagram : String,
//    website : String
// },
// followers: {
//   type: Array
// },
// interests : {
//   type : Array
// }