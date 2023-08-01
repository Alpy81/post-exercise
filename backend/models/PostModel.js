import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  adress: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  smoker: {
    type: Boolean,
    require: true,
  },
  birthday: {
    type: String,
    require: true,
  },
});

export const PostModel = mongoose.model("posts", postSchema);
