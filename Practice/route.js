const express = require("express");
const router = express.Router();

const {
  creator,
  getAll,
  getSingle,
  updator,
  deletor,
} = require("./controller");

router.route("/").get(getAll).post(creator);

router.route("/:id").get(getSingle).delete(deletor).patch(updator);

module.exports = router;
