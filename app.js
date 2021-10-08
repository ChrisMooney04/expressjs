const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const path = require('path');
const ejs = require('ejs')
const fs = require('fs');

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

var rawdata = fs.readFileSync('profiles.JSON');
var profileData = JSON.parse(rawdata);
console.log(rawdata);
console.log(profileData);
// sendFile will go here
app.get('/hi', function(req, res) {
  res.sendFile(path.join(__dirname, '/main.html'));
});
app.get("/", (req, res) => {
  res.render('main', {
    title: 'hello',
    mainbody: 'no'
  });
});
app.get("/chris", (req, res) => {
    res.render('profile', profileData.chris);
});
app.get("/jayson", (req, res) => {
    res.render('profile', profileData.jayson);
});
app.get("/tyler", (req, res) => {
    res.render('profile', profileData.tyler);
});
app.get("/will", (req, res) => {
  res.render('profile', profileData.will);
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
