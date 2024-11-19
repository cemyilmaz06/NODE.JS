// "use strict";
// // console.log('nodejs server');

// const http = require("node:http");

// // const app=http.createServer((req, res)=>{
// //   console.log("server içindsin");

// //   res.end('<h1>"hello FS"</h1>');
// // }).listen(8000,'127.0.0.1',()=> console.log('Server runned http://127.0.0.1:8000'))
// require("dotenv").config();
// const PORT = process.env.PORT || 8000;
// const HOST = process.env.HOST || "127.0.0.1";

// // const app = http
// //   .createServer((req, res) => {
// //     // console.log(req);

// //     if (req.url == "/")
// //       if (req.method == "GET") res.end("<h1> Home page</h1>");
// //       else res.end("<h1> You can not POST</h1>");
// //     else if (req.url == "/user") res.end("<h1> User page</h1>");
// //     else res.end("<h1> Undefined url</h1>");
// //   })
// //   .listen(8000,'127.0.0.1',()=> console.log('Server Runned http://127.0.0.1:8000'))

//   const app = http
//   .createServer((req, res) => {
//     const obj = {
//       chort: "FS",
//       message: "Hello",
//     };
//     res.end(JSON.stringify(obj));
//   })
//   .listen(PORT, () => console.log(`Server Runned http://${HOST}:${PORT}`));



"use strict";
const express = require("express");
const app = express();
//! 9'ncu soru
// const myLogger = function (req, res, next) {
// //   const name = "Cem";
//   // console.log(req)
//   req.name = "Cem";
//   console.log(req.url);
//   next();
// };
// app.use(myLogger);
// app.get("/", (req, res) => {
//   res.send(`Hello ${req.name}!`);
// });
//! 10'ncu soru
    app.get("/", (req, res) => {
    const {num1,num2}= req.query
      res.send({
        result:parseInt(num1) + parseInt(num2)
      });
    });
app.listen(8000, () => console.log("server running"));