import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { UserModel } from "./models/UserModel.js";
import "dotenv/config.js";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import morgan from "morgan";
import { ItemModel } from "./models/ItemModel.js";

const PORT = 3001;

const appExpress = express();
const upLoad_form = multer();
const upLoad = multer({ storage: multer.memoryStorage() });

appExpress.use(cors());

appExpress.use(morgan("dev"));

appExpress.use(express.json());

cloudinary.config({
  cloud_name: "dzrgzlg1m",
  api_key: "754194398817342",
  api_secret: "Y-cgKSu4uaY4EXsjq8HVoRJPZpE",
});

mongoose.connect(process.env.MONGO_DB);

appExpress.get("/api/firstpost", (req, res) => {
  res.send("That's my weekend Exercise");
});

appExpress.post("/api/sendenpost", upLoad_form.none(), async (req, res) => {
  const newPost = await UserModel.create(req.body);
  res.send(newPost);
});

appExpress.post("/api/additem", upLoad.single("image"), async (req, res) => {
  try {
    cloudinary.uploader
      .upload_stream(
        { resource_type: "image", folder: "MyBlog" },
        async (err, result) => {
          console.log(result);
          const response = await ItemModel.create({
            ...req.body,
            image: { url: result.secure_url, imageId: result.public_id },
          });
          res.json(response);
        }
      )
      .end(req.file.buffer);
  } catch (error) {
    console.log(error);
    res.status(500).send("there was an Error", error);
  }
});

appExpress.put("/api/bearbeitetpost/:id", async (req, res) => {
  const newEditPost = await UserModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  console.log(newEditPost);
  res.send(newEditPost);
});

appExpress.delete("/api/deletepost/:id", async (req, res) => {
  const deletePost = await UserModel.findByIdAndDelete(req.params.id);
  console.log(deletePost);
  res.send(deletePost);
});

appExpress.listen(PORT, () =>
  console.log(`Server ist am Laufen mit diesem ${PORT}`)
);
