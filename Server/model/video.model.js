const mongoose = require("mongoose");

const videoSchema = mongoose.Schema(
  {
    tag: String,
    videoTime: Number,
    Date: String,
    videoId: String,
  },
  
);

const VideoModal = mongoose.model("video", videoSchema);

module.exports = {
  VideoModal,
};
