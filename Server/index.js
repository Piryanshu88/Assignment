const { json } = require("express");
const express = require("express");
const { connect } = require("./config/db");
const { videoRouter } = require("./routes/video.routes");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use("/", videoRouter);
app.get("/", (req, res) => {
  res.send("This is home page ");
});

app.listen(8080, async () => {
  try {
    await connect;
    console.log("Connected to db");
  } catch (error) {
    console.log(error);
  }
  console.log("Server running at 8080");
});
