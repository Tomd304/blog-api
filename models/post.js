let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let PostSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    published: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
