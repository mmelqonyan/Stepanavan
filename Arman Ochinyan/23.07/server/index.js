
//Please run node index.js in folder /sendbackend, run mongodb-server and run npm start in another terminal

var express = require('express');
var bodyparser = require('body-parser');
var getValue = require('./mongoget');
var setValue = require('./mongo');

var app = express();
app.use(bodyparser.urlencoded({ extended : false }));

app.get('/name',function (req,res) {
	
	getValue(res);			
});

app.post('/name',function (req,res) {

	setValue(Object.keys(req.body)[0]);
	res.json({name : Object.keys(req.body)[0]});			
});

app.listen(process.env.PORT || 3001, process.env.IP || '0.0.0.0',(e)=>{
	if(e) throw e;
	console.log("3001")
})

