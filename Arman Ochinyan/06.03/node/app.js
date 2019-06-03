var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017/mydb');

var app = express();
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, 'public')));


app.post('/post-feedback', function (req, res) {
    dbConn.then(function(db) {
        delete req.body._id; // for safety reasons
        db.collection('feedbacks').insertOne(req.body);
    });    
    res.render('news',{body: req.body}) ;//send( '<html><body><h3>'+req.body.name+'</h3><h3>'+req.body.email+'</h3><h3>'+req.body.comment+'</h3></body></html>');
});

app.get('/view-feedbacks',  function(req, res) {
    dbConn.then(function(db) {
        db.collection('feedbacks').find({}).toArray().then(function(feedbacks) {       
            		
            res.render('alldata',{body: feedbacks}) 
            	
                    
        });
    });

});

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );
