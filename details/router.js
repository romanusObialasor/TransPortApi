const express = require("express");
const multer = require("multer");
const path = require("path");
const model = require("./model");
const router = express.Router();
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "userapi",
  api_key: "951792771124655",
  api_secret: "ed4hz_jlb_DktA1oYf2dmN_X3AQ",
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
},    
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb("file format not supported");
  }
};

const upload = multer({
  storage: storage,
  fileFilter,
});

router.get("/", async (req, res) => {
  try {
    const newData = await model.find();
    res.status(200).json({
      msg: "found all",
      data: newData,
    });
  } catch (error) {
    res.status(404).json({
      msg: "error",
      data: error,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const newData = await model.findById(req.params.id);
    res.status(200).json({
      msg: "found single",
      data: newData,
    });
  } catch (error) {
    res.status(404).json({
      msg: "error",
      data: error,
    });
  }
});

// router.post("/", upload.single("avatar"), async (req, res) => {
//   try {
//     const newData = await model.create({
//       userName: req.body.userName,
//       password: req.body.password,
//       email: req.body.email,
//       avatar: req.file.path,
//     });
//     res.status(200).json({
//       msg: "created",
//       data: newData,
//     });
//   } catch (error) {
//     res.status(404).json({
//       msg: "error",
//       data: error,
//     });
//   }
// });

router.post("/", upload.single("avatar"), async (req, res) => {
  const { email } = req.body;

  const ifUser = await model.findOne({ email });
  if (ifUser) {
    res.status(404).json({
      msg: "user already exist",
    });
  }

  const result = await cloudinary.uploader.upload(req.file.path);
  // console.log(result);

  const newData = new model({
    userName: req.body.userName,
    password: req.body.password,
    email: req.body.email,
    avatar: result.secure_url,
  });
  try {
    const newUser = await newData.save();
    res.json(newUser);
  } catch (error) {
    res.status(404).json({
      msg: "errror",
      data: error,
    });
  }
});

// router.patch("/:id", async(req, res)=>{
//   try{
//     const newData = await model.findByIdAndUpdate(req.params.id,{
//             userName: req.body.userName,
//             password: req.body.password,
//             email: req.body.email,
//             avater: req.file.path,
//             admin: req.body.admin,
//           })
//   res.status(200).json({
//     msg: "found all",
//     data: newData
//   })
//   }catch(error){
//     res.status(404).json({
//       msg: "error",
//       data: error
//     })
//   }
// })

router.delete("/:id", async (req, res) => {
  try {
    const newData = await model.findByIdAndRemove(req.params.id, req.body);
    res.status(200).json({
      msg: "deleted",
      data: newData,
    });
  } catch (error) {
    res.status(404).json({
      msg: "error",
      data: error,
    });
  }
});

module.exports = router;
