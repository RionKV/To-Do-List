const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const arrToday = [];
const arrWork = [];

app.get("/", (req, res) => {
  const d = new Date();
  const dayy = weekday[d.getDay()];

  const datee = d.getDate();
  const monthh = months[d.getMonth()];

  res.render("index.ejs", {day : dayy, month : monthh, date : datee, fillerToday : arrToday});
});

app.get("/work", (req, res) => {
  res.render("index.ejs", {fillerWork : arrWork});
})

app.post("/", (req, res) => {
  const d = new Date();
  const dayy = weekday[d.getDay()];

  const datee = d.getDate();
  const monthh = months[d.getMonth()];

  const value = req.body.newItem;
  arrToday.push(value);

  res.render("index.ejs", {fillerToday : arrToday, day : dayy, month : monthh, date : datee});
});

app.post("/work", (req, res) => {
  const value = req.body.newItem;
  arrWork.push(value);

  res.render("index.ejs", {fillerWork : arrWork});
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
