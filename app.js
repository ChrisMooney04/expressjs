const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const path = require('path');
const ejs = require('ejs')
const fs = require('fs');
app.use(express.urlencoded());

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

var rawdata = fs.readFileSync('profiles.JSON');
var profileData = JSON.parse(rawdata);
/*console.log(rawdata);
console.log(profileData);*/


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
app.get("/feedback", (req, res) => {
  rawdata = fs.readFileSync('comments.json');
  commentData = JSON.parse(rawdata);
  res.render('feedback',commentData)
});
app.post('/feedback', (req, res) => {
  let feedback = {
    name: req.body.name,
    adjective: req.body.comments
  };
  rawdata = fs.readFileSync('comments.json');
  commentData = JSON.parse(rawdata);
  commentData.comments.push(feedback)
  if (feedback.name && feedback.adjective) {
    fs.writeFile("comments.json", JSON.stringify(commentData), "utf8", (err) => {
      if (err) {
        console.log(err)
      } else {
      }
    })
  }
})

app.get("/comments", (req, res) => {
  data = fs.readFileSync('comments.JSON')
  commentData = JSON.parse(data)
  res.render(path.join(__dirname, 'views/comments.ejs'), commentData);
})
app.listen(port);
console.log('Server started at http://localhost:' + port);
