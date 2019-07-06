// Please write yourpassword in connection.js/ connection.password key
var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyparser.urlencoded({extended : false}));

app.use(express.static((__dirname,'public')));


app.get('/',function (req,res) {
	res.sendFile('index');
});

app.post('/',function (req,res) {

		require('./src/conn')();
		if (req.body) {
			require('./src/query')(req.body);
			res.send(req.body);
		}else{
			console.log("Please enter correct data");
			res.Status(404);
		}
			
});

app.get('/find',function (req,res) {

	var connection = require("./src/connection")();
	connection.query("USE student",function (err,result) {
		if (err) { throw err}

		var find = `SELECT ID,name,price from students GROUP BY ID ORDER BY price DESC LIMIT 5`;

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

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0',(e)=>{
	if(e) throw e;
	console.log("3000")
})

