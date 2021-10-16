const mongoose = require("mongoose");

const schema = mongoose.Schema({
  todo: {
    type: String,
    require: true,
  },
  complete: {
    type: Boolean,
    require: true,
  },
});

module.exports = mongoose.model("schema", schema);
