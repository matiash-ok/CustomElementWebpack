const path = require('path')
var express = require('express');
var app = express();


app.use('/', express.static(path.resolve('dist')));

// set the view engine to ejs
app.set('views', path.join(__dirname, '/dist'));
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

app.get('/', (req, res) => {
  res.render('jaja.ejs')
}) 

app.listen(7000);
console.log('7000');