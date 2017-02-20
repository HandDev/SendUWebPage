/**
 * Created by parkjaesung on 2016. 10. 17..
 */

var express = require('express');
var reply_letter = require('./controllers/reply_letter');
var path = require('path');

var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
app.engine('html', require('ejs').renderFile);

app.use('/assets',express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/views')));

app.use('/reply/letter', reply_letter);

app.get('/', function(req, res){
   res.render('index')
});

var server = app.listen(80, function(){
    console.log("Express server has started on port 3000")
});

