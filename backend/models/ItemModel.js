import mongoose, { SchemaType } from "mongoose";

const ItemSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
    enum: ["big stuff", "middle stuff", "small stuff"],
  },
  image: {
    type: {
      url: String,
      imageId: String,
    },
  },
  user: {
    type: SchemaType.ObjectId,
    ref: "UserModel",
  },
});

export const ItemModel = mongoose.model("items", ItemSchema);
