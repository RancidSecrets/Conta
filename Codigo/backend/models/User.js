const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PLM = require("passport-local-mongoose");

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  photo: String,
  balance: Number,
  role: String,
  tenpropId: String
});

userSchema.plugin(PLM, { usernameField: "email" });

const User = mongoose.model("User", userSchema);

module.exports = User;
