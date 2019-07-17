// Please write yourpassword in connection.js/ connection.password key
//Please run node index.js in folder /sendbackend and run npm start another terminal

var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyparser.urlencoded({extended : false}));

/////  mysql  ////////////
//      				//
 require('./src/conn'); //
// 						//
//////////////////////////


app.post('/',function (req,res) {

		if (req.body) {
			require('./src/query')(req.body.data,res);
		}else{
			console.log("Please enter correct data");
			res.Status(404);
		}
			
});

app.get('/find',function (req,res) {

	var connection = require("./src/connection")();
	connection.query("USE student",function (err,result) {
		if (err) { throw err}

		var find = `SELECT ID,name,price from students GROUP BY ID ORDER BY price desc LIMIT 5`;

		connection.query(find, function (err, result) {
			if (err) throw err;
			let str="";
			console.log("record find");
			result.forEach(function (element) {
				str += ('Name '+element.name +' Price '+ element.price)+'<br>';
			})	 	
			res.send(str);
		});
	});
	
});

app.listen(process.env.PORT || 3001, process.env.IP || '0.0.0.0',(e)=>{
	if(e) throw e;
	console.log("3001")
})

