let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let CommentSchema = new Schema(
  {
    content: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
