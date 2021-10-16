const model = require("./model");

exports.creator = async (req, res) => {
  const entry = await model.create(req.body);
  res.status(200).json({
    msg: "successfully created",
    data: entry,
  });
};

exports.getAll = async (req, res) => {
  const entry = await model.find();
  res.status(200).json({
    msg: "successful in getting all",
    data: entry,
  });
};

exports.getSingle = async (req, res) => {
  const entry = await model.findById(req.params.id);
  res.status(200).json({
    msg: "successful in getting a single data",
    data: entry,
  });
};

exports.updator = async (req, res) => {
  const entry = await model.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    msg: "successfully updated",
    data: entry,
  });
};

exports.deletor = async (req, res) => {
  const entry = await model.findByIdAndRemove(req.params.id, req.body);
  res.status(200).json({
    msg: "successfully created",
    data: entry,
  });
};
