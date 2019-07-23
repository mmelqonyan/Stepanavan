var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
function data(arg) {
	
	MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
	  if (err) throw err;
	    var dbo = db.db("mydb");
	    
	    dbo.collection("prod").update({name: {$exists : true}},{name : arg},{ upsert: true }, function(err, res) {
	        if (err) throw err;
	        console.log("1 document updated");
	        db.close();

	  });
	});
}
module.exports = data;