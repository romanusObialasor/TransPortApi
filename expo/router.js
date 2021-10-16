const express = require("express");
const model = require("./model");
const router = express.Router();

router.get("/", async (req, res) => {
  const myData = await model.find();
  res.status(200).json(myData);
});

router.post("/", async (req, res) => {
  const newData = await model.create(req.body);
  res.status(200).json(newData);
});

router.get("/:id", async (req, res) => {
  const singleData = await model.findById(req.params.id);
  res.status(200).json(singleData);
});

router.patch("/:id", async (req, res) => {
  const updateItem = await model.findByIdAndUpdate(req.params.id, req.body);
  res.json(updateItem);
});

router.delete("/:id", async (req, res) => {
  const deleteItem = await model.findByIdAndRemove(req.params.id, req.body);
  res.json(deleteItem);
});

module.exports = router;
