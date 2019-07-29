const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require("mongodb").MongoClient;
const mongo = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
const cors = require('cors');
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());

module.exports = {
	signup: function(name, surname,email, password){
		MongoClient.connect(url, function(err, db) {
		  	db.collection('user').insertOne( {
				"name": name,
                "surname":surname,
				"email": email,
				"password": password
			},function(err, result){
				assert.equal(err, null);
		    	console.log("Saved the user sign up details.");
			});
		});
	},
	validateSignIn: function(username, password,callback){
		MongoClient.connect(url, function(err, db){
			console.log(username,password);
			db.collection('user').findOne( { email : username ,password: password 
			},function(err, result){
				if(result==null){
					console.log('returning false')
					callback(false)
				}
				else{
					console.log('returning true')
					callback(true)
				}
			});
		});
	}

}

app.post('/signin', function (req, res) {
  var user_name=req.body.email;
  var password=req.body.password;
  user.validateSignIn(user_name,password,function(result){
    if(result){
      res.send('Success')
    }
    else{
      res.send('Wrong username pass')
    }
  });
  
  
  
})

app.post('/signup', function (req, res) {
  var name=req.body.name;
  var email=req.body.email;
  var password=req.body.password;

  if(name && email && password){
  	user.signup(name, email, password)
  }
  else{
  	res.send('Failure');
  }
})



app.listen(3001, function () {
   console.log('Example app listening on port 3000!');
 });
