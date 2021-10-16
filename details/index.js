const express = require("express");
const port = 3000;
const mongoose = require("mongoose");
const url = "mongodb://localhost:userAPI";
const router = require("./router");
const app = express();

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB connected 🦾");
  })
  .catch((error) => {
    console.log("error while connecting to the Db");
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome. User");
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`port ${port} is listening`);
});
