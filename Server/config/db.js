const mongoose = require("mongoose");

const connect = mongoose.connect(
  `mongodb+srv://piryanshu:piryanshu@cluster0.gjhczst.mongodb.net/assignment?retryWrites=true&w=majority`
);

module.exports = {
  connect,
};
