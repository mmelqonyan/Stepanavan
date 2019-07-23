var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var setValue = require('./mongo');

 function data(res) {
		
	
	 MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
	    if (err) {throw err};
	        var dbo = db.db("mydb");
	  	dbo.collection("prod").findOne({}, function(err, result) {
	  		
	     	if (err) {throw err};
	     	if (result == undefined || result == null) {
	     		setValue('name');
	     		res.json({ value : 'name' });
	     		return;
	     	}
	    	res.json({ value : result.name });
	  	});
	});
	 
}


module.exports = data;
