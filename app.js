const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios=require("axios");
require('dotenv').config();     // to include .env file
const PORT = 4000;

let url=process.env.url1;
let key=process.env.apiId;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.post("/", async (req, res) => {
  let { city } = req.body;
  console.log(city);

  let a= await axios(url + `&q=${city}` + `&cnt=5` + `&appid=${key}`)
    a=JSON.stringify(a.data);
    console.log(a);
    res.send(a);
     
});

app.listen(PORT, () => {
  console.log("hello");
});
