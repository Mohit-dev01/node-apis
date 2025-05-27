require("dotenv").config();
const express = require("express");
const app = express();
const products_routes = require("./routes/products");
const connectDb = require("./db/connect");

app.get("/", (req, res) => {
  console.log("request", req), res.send("Hi, I am live");
});

app.use("/api/products", products_routes);

const PORT = process.env.PORT;
app.listen(PORT, async () => {
  try {
    console.log(`Hi, server is listening on port ${3000}`);
    await connectDb(process.env.MONGODb_URL);
  } catch (err) {
    console.log(err);
  }
});
