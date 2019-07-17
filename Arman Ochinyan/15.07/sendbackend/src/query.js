
function query(req,res) {
	var reqbody = JSON.parse(req);
	
	var connection = require("./connection")();
	connection.connect();
	var db = "products";
   
		var sql = "INSERT INTO product (name, tesak,price) VALUES (?,?,?)";
		connection.changeUser({
		database : db
		}, function(err) {
			if (err) {
				console.log('Error in changing database', err);
				return;
			}   
			
				if (err) { throw err} 	
				connection.query(sql,[reqbody.name, reqbody.tesak,reqbody.price], function (err, result) {
					if (err) throw err;

					console.log("1 record inserted");
							 	
					res.send(reqbody);
				});
			
		});

}
module.exports = query;