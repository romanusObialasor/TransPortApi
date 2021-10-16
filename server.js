require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./router");
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Db connected Succecfully 💪`);
  })
  .catch((error) => {
    console.log(error.message);
  });

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome All");
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`port ${port} is 👂'ing `);
});
