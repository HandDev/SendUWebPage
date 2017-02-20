/**
 * Created by parkjaesung on 2016. 10. 17..
 */

var express = require('express');
var reply = require('./controllers/reply');
var path = require('path');

var app = express();
app.set('view engine', 'html');
app.use(express.static(__dirname + '/views'));

app.use('/assets',express.static(path.join(__dirname, 'public')));

app.use('/reply', reply);

app.get('/', function(req, res){
   res.render('index')
});

var server = app.listen(80, function(){
    console.log("Express server has started on port 3000")
});

