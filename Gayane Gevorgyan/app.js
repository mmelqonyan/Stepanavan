  const express = require('express'); 
  const bodyParser = require('body-parser') 
  const app = express(); 

  //const urlencodedParser = bodyParser.urlencoded({extended: true});
  app.get("/app", function(request,response){
	response.sendFile(__dirname + "/app.html");
});

  app.post("/app", function(request,response){
	if(!request.body) return response.sendStatus(400);
	console.log(request.body);
	response.send(`${request.body.agent} - ${request.body.nickname} - {request.body.country}`);
});
  app.get("/", function(request,response){
	response.send("Agency")
});

app.listen(3000);
