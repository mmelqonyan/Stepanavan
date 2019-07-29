var select1 = [];
function select() {
	var connection = require("./connection")();
	connection.connect();

	var db = "products";
   
		var sql = `SELECT ID, price FROM product`;

		connection.changeUser({
		database : db
		}, function(err) {
			if (err) {
				console.log('Error in changing database', err);
				return;
			}   
			
			connection.query(sql, function (err, result, fields) {
			    if (err) throw err;
			    select1 = result;
			});
			    	
		});
	   
}
console.log(select)
module.exports = select;