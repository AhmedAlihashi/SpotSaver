const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  name: String,
  email: String,
  picture: String,
});

module.exports = model("User", UserSchema);
