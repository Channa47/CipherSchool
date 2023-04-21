const mongoose = require("mongoose");

const moreInfoSchema = new mongoose.Schema({
  userid : String,
  description: {
    type: String,
  },
  links: {
    type: {
      linkedin: String,
      github: String,
      facebook: String,
      instagram: String,
      website: String,
    },
    default: {},
  },
  profession_info: {
    type: {
      Highest_education: String,
      Current_occupation: String,
    },
    default: {},
  },
  interest: {
    type: [String],
    default: [],
  },
  fallowers: {
    type: [String],
    default: [],
  },
});

const MoreInfoModel = mongoose.model("MoreInfo", moreInfoSchema);

module.exports = MoreInfoModel;
