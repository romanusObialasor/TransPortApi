require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./router");
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Db connected Succecfully 💪`);
  })
  .catch((error) => {
    console.log("error while connecting");
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

// require("dotenv").config();
// // const express = require("express");
// // const mongoose = require("mongoose");
// // const port = process.env.PORT || 5000;
// // const app = express();
// // // const DataBase =
// // //   "mongodb+srv://wrsMKqHXcLIdob5I:wrsMKqHXcLIdob5I@cluster0.vxqcy.mongodb.net/Pushing?retryWrites=true&w=majority";

// // // mongoose
// // //   .connect(DataBase, {
// // //     useCreateIndex: true,
// // //     useFindAndModify: false,
// // //     useNewUrlParser: true,
// // //     useUnifiedTopology: true,
// // //   })
// // //   .then(() => {
// // //     console.log(`Server connected successfully`);
// // //   });

// // app.get("/", async (req, res) => {
// //   res.status(200).send("Welcome Romanus to your Api");
// //   res.status(200).send("\nWelcome Romanus to your Api");
// //   res.status(200).send("\nWelcome Romanus to your Api");
// //   res.status(200).send("\nWelcome Romanus to your Api");
// //   res.status(200).send("\nWelcome Romanus to your Api");
// // });

// // app.listen(port, () => {
// //   console.log(`port da work`);
// // });

// const express = require("express");
// const port = process.env.PORT || 3000;

// const studentData = [
//   { id: 1, name: "Romanus", course: "Javascript" },
//   { id: 2, name: "Esther", course: "Python" },
//   { id: 3, name: "Stella", course: "React" },
//   { id: 4, name: "Lucky", course: "node" },
//   { id: 5, name: "Goodluck", course: "Css" },
//   { id: 6, name: "Chris", course: "html" },
// ];

// const app = express();
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Welcome To post man");
// });

// app.get("/api", (req, res) => {
//   res.send(studentData);
// });

// // app.post("/api", (req, res) => {
// // const student = ({
// //     id: studentData.length + 1,
// //     name: req.body.name,
// //     course: req.body.course,
// //   });
// //   res.send("data successfully posted");
// // });

// app.post("/api", (req, res) => {
//   if (!studentData) {
//     console.log("No such Data");
//   }
//   const newData = {
//     id: studentData.length + 1,
//     name: req.body.name,
//     course: req.body.course,
//   };
//   studentData.push(newData);
//   res.send(studentData);
// });

// // get a single Data

// // app.get("/api/:id", (req, res) => {
// //   const getSingle = studentData[parseInt(req.params.id) - 1];
// //   res.send(getSingle);
// // });

// app.get("/api/:id", (req, res) => {
//   const studentId = studentData.find(
//     (stud) => stud.id === parseInt(req.params.id)
//   );
//   if (!studentId) {
//     res.send(`no student with id: ${req.params.id}`);
//   } else {
//     res.status(200).json({
//       message: "Data found Succefully",
//       data: studentId,
//     });
//   }
// });

// // app.delete("/api/:id", (req,, res)=>{
// //   const getSingle = studentData[parseInt(req.params.id) - 1];
// //   const deleteData = getSingle.
// // })

// app.listen(port, () => {
//   console.log(`${port} is up and running`);
// });
