var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Reviews = require('./public/src/js/dao/ReviewDAO');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-type, Accept, X-Access-Token, X-Key');
    next();
});

app.use('/review', Reviews);

var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})

module.exports = app;