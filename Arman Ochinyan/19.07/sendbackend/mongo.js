var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
function data(arg) {
	
console.log(arg)
	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	    var dbo = db.db("mydb");
	    
	    dbo.collection("prod").insertOne(JSON.parse(arg), function(err, res) {
	        if (err) throw err;
	        console.log("1 document inserted");
	        db.close();

	  });
	});
}
module.exports = data;