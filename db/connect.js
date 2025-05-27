const mongoose = require("mongoose");

const connectDb = (uri) => {
  console.log("connect db");
  return mongoose.connect(uri, {
    // useNewUrlParser: true,
    // useUnifiedTechnology: true,
  });
};

module.exports = connectDb;
