const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const path = require('path');
const ejs = require('ejs')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

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
  res.render('chris', {
    title: 'hello',
    mainbody: 'no'
  });
});
app.get("/jayson", (req, res) => {
  res.render('jayson', {
    title: 'hello',
    mainbody: 'no'
  });
});
app.get("/tyler", (req, res) => {
  res.render('tyler', {
    title: 'hello',
    mainbody: 'no'
  });
});
app.get("/will", (req, res) => {
  res.render('will', {
    title: 'hello',
    mainbody: 'no'
  });
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
