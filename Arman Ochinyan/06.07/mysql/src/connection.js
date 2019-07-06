function conn() {
	var mysql = require("mysql");

	var connection = mysql.createConnection({
	    host: "127.0.0.1",
	    user: "root",        // <-Please write yourusername here
	    password: "077388911"// <-Please write yourpassword here
	   
	});
	return connection;
}

module.exports = conn;