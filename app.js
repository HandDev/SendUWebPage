/**
 * Created by parkjaesung on 2016. 10. 17..
 */

var express = require('express');
var reply = require('./reply');

var app = express();
app.set('view engine', 'html');
app.use(express.static(__dirname + '/views'));

app.use('/assets',express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
   res.render('index')
});

app.use('/reply', reply);

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
})

