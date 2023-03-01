import express from "express";
import { chats } from "./data/data.js";
import dotenv from "dotenv";
import cors from "cors";
const app = express();

dotenv.config();
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Get All Chats
app.get("/api/chat", (req, res) => {
  res.send(chats);
});

// Get single chat
app.get("/api/chats/:id", (req, res) => {
  const singleChat = chats.find((chat) => chat._id == req.params.id);
  res.send(singleChat);
});
const PORT = process.env.PORT;
app.listen(PORT || 5000, console.log(`Server is running on ${PORT} `));
