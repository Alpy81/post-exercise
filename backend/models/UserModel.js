import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  adress: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
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

export const UserModel = mongoose.model("User", UserSchema);
