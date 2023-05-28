const express = require("express");
const { VideoModal } = require("../model/video.model");

const videoRouter = express.Router();

videoRouter.post("/add", async (req, res) => {
  try {
    const data = new VideoModal(req.body);
    await data.save();
    res.send("Data Send Successfully");
  } catch (error) {
    res.send("Something went wrong");
    console.log(error);
  }
});

videoRouter.get("/get", async (req, res) => {
  try {
    const data = await VideoModal.find();
    console.log(data);
    res.send(data);
  } catch (error) {
    res.send("Something went wrong");
    console.log(error);
  }
});

module.exports = {
  videoRouter,
};
