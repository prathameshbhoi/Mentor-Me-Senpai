var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var router = express.Router();

var url = "mongodb://localhost:27017/prep2crack";


MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    db.createCollection("interviewReviews", function (err, res) {
        if (err) throw err;
        console.log("Table created!");
        db.close();
    });
});

/* POST /customers */
router.post('/', function (req, httpRes, next) {
    var inerviewReview = req.body;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        db.collection("interviewReviews").insertOne(inerviewReview, function (err, result) {
            if (err) throw err;
            db.close();
            httpRes.end("Success");
        });
    });

});

/* POST /customers */
router.get('/', function (req, res, next) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        db.collection("interviewReviews").find({}).toArray(function (err, result) {
            if (err) throw err;
            db.close();
            res.end(JSON.stringify(result));
        });
    });
});

module.exports = router;