
//Please run node index.js in folder /sendbackend, run mongodb-server and run npm start in another terminal

var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var app = express();
var insert = require('./mongo');
app.use(bodyparser.urlencoded({ extended : false }));

app.post('/',function (req,res) {
	
	insert(req.body.data);
	res.send(req.body.data);			
});

app.listen(process.env.PORT || 3001, process.env.IP || '0.0.0.0',(e)=>{
	if(e) throw e;
	console.log("3001")
})

