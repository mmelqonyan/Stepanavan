
function query(reqbody) {

	var connection = require("./connection")();

	var db = "student";
    
	var sql = "INSERT INTO students (name, surname,age,price) VALUES (?,?,?,?)";
	connection.changeUser({
	database : db
	}, function(err) {
		if (err) {
			console.log('Error in changing database', err);
			return;
		}    	
	connection.query(sql,[reqbody.name, reqbody.surname,reqbody.age,reqbody.price], function (err, result) {
		if (err) throw err;

		console.log("1 record inserted");
				 	
		return result;
		});
	});

}
module.exports = query;