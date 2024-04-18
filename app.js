const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios=require("axios");
const PORT = 4000;
const apiId = "69b0b99058c035044f842679ebf46825";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const url1 = "https://api.openweathermap.org/data/2.5/forecast?units=metric";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.post("/", async (req, res) => {
  let { city } = req.body;
  console.log(city);

     let a= await axios(url1 + `&q=${city}` + `&cnt=5` + `&appid=${apiId}`)
    a=JSON.stringify(a.data);
    console.log(a);
    res.send(a);
     
});

app.listen(PORT, () => {
  console.log("hello");
});
