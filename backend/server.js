import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PostModel } from "./models/PostModel.js";
import "dotenv/config.js";

const PORT = 3001;

const appExpress = express();

appExpress.use(cors());

appExpress.use(express.json());

mongoose.connect(process.env.MONGO_DB);

appExpress.get("/api/firstpost", (req, res) => {
  res.send("That's my weekend Exercise");
});

appExpress.post("/api/sendenpost", async (req, res) => {
  const newPost = await PostModel.create(req.body);
  res.send(newPost);
});

appExpress.put("/api/bearbeitetpost/:id", async (req, res) => {
  const newEditPost = await PostModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  console.log(newEditPost);
  res.send(newEditPost);
});

appExpress.delete("/api/deletepost/:id", async (req, res) => {
  const deletePost = await PostModel.findByIdAndDelete(req.params.id);
  console.log(deletePost);
  res.send(deletePost);
});

appExpress.listen(PORT, () =>
  console.log(`Server ist am Laufen mit diesem ${PORT}`)
);
