var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

// Nodejs encryption with CTR
/////////////////////////////////////////////////
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);


function encrypt(pt){
	var key = "abcdefghijklmnopqrstuvwx";
	var encrypt = crypto.createCipheriv('des-ede3', key, "");
	var theCipher = encrypt.update(pt, 'utf8', 'base64');
	theCipher += encrypt.final('base64');
return theCipher;
}

function decrypt(theCipher) {
	var key = "abcdefghijklmnopqrstuvwx";
	var decrypt = crypto.createDecipheriv('des-ede3', key, "");
	var s = decrypt.update(theCipher, 'base64', 'utf8');
	return (s + decrypt.final('utf8'));
}

/////////////////////////////////////////////////

var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017/mydb');

var app = express();
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, 'public')));


app.post('/post-feedback', function (req, res) {
     
    
	res.setHeader('Content-Type', 'text/html');
    dbConn.then(function(db) {
        db.collection('feed').find({'email' : req.body.email },{_id : 0,email : 1}).toArray().then(function(feed) { 
                  	
           		if (feed[0]) {
           			
           			if(feed[0].email == req.body.email){
	           			
	            	 	res.send('<html><body><h3> This Email: <i>'+req.body.email+ '</i> allredy exists:Try new</h3></body></html>') 
	            	 	return;
	            	}
            	}
	
			delete req.body._id; // for safety reasons
			var password = encrypt(req.body.pass);
			db.collection('feed').insertOne( { email:req.body.email, pass:password } );
			res.render('news', { body: { email:req.body.email, pass:password } } ) ;
				  

    	}).catch(function(e) {
    		console.log(e)
    	})
        
    
	}).catch(function(e) {
    		console.log(e)
    })

});

app.get('/view-feedbacks',  function(req, res) {
    dbConn.then(function(db) {
        db.collection('feed').find({}).toArray().then(function(feed) {       
            		
            res.render('alldata',{body: feed}) 
            	               
        });
    });

});

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );