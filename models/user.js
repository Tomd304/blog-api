let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  password: { type: String, required: true },
});

UserSchema.virtual("fullname").get(function () {
  return this.firstname + " " + this.lastname;
});

module.exports = mongoose.model("User", UserSchema);
