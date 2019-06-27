//Please run a 'npm start' and 'node server' in terminal, so the program will work correctly

var app = require('express')();
var path = require('path');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;


var url = "mongodb://localhost:27017/";

app.use(bodyParser.urlencoded({ extended: false }));

MongoClient.connect(url,{ useNewUrlParser: true }, function(err, client) {
		  if (err) throw err;
		  app.post('/', function (req, res) {
		    var db = client.db('mydb');
			    db.collection("react").insert({"a":req.body.email});
				    console.log((JSON.parse(req.body.email)).name);
				    db.close();
				    res.end("The data was successfully sent to the database:You can check the 'mangodb/mydb/react' collection")
		  
	        });

});

app.listen(process.env.PORT || 3001, process.env.IP || '0.0.0.0',(e)=>console.log(3001) );