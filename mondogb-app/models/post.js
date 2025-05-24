const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  postId: { type: Number, required: true, unique: true },
  description: { type: String, required: true },
  title: { type: String, required: true },
  likes: { type: Number, required: false },
  image: { type: String, required: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("post", postSchema);
