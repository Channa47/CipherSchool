
const mongoose = require('mongoose');
const avatarSchema = mongoose.Schema({
  userid: String,
  image_url : String
});

const AvatarModel = mongoose.model("Images", avatarSchema);

module.exports = AvatarModel;

