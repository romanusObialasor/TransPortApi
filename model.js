const mongoose = require("mongoose");

const model = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      default: true,
    },
  }
);

module.exports = mongoose.model("schema", model);
