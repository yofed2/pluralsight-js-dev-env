import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.get('/users', function(req, res) {
  //  Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Jim","lastName":"Smith","email":"jim@gmail.com"},
    {"id": 3,"firstName":"Joe","lastName":"Smith","email":"joe@gmail.com"},
    {"id": 4,"firstName":"Ron","lastName":"Smith","email":"ron@gmail.com"},
  ]);
});

/* eslint-disable no-console */

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
