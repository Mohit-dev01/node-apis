const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("request", req), res.send("Hi, I am live");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Hi, server is listening on port ${3000}`);
});
