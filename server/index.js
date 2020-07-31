const express = require("express");
const saying = require("../saying.json");
const app = express();
app.use(express.json());





const port = 5000;
app.listen(port, `I will survive on ${5000}`);
