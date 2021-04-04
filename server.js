const express = require("express");
const studentRouter = require("./router/studentRouter");

require("./config/dbConnect");

const app = express();

app.use(express.json());

app.use(express.urlencoded());

app.use("/students", studentRouter);

app.listen(4000, () => console.log("server up and running"));
