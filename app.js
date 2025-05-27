const express = require("express");
const app = express();
const products_routes = require("./routes/products");

app.get("/", (req, res) => {
  console.log("request", req), res.send("Hi, I am live");
});

app.use("/api/products", products_routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Hi, server is listening on port ${3000}`);
});
