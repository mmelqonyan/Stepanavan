var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

// Nodejs encryption with CTR
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// function encrypt(text) {
//  let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
//  let encrypted = cipher.update(text);
//  encrypted = Buffer.concat([encrypted, cipher.final()]);
//  return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
// }

// function decrypt(text) {
//  let iv = Buffer.from(text.iv, 'hex');
//  let encryptedText = Buffer.from(text.encryptedData, 'hex');
//  let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
//  let decrypted = decipher.update(encryptedText);
//  decrypted = Buffer.concat([decrypted, decipher.final()]);
//  return decrypted.toString();
// }

 //var hw = encrypt("Some serious stuff")
 //console.log(hw)
 //console.log(decrypt(hw))

 


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
//console.log(decrypt(encrypt(pt)))
/////////////////////////////////////////////////

var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017/mydb');

var app = express();
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, 'public')));


app.post('/post-feedback', function (req, res) {
     
   
    dbConn.then(function(db) {
        db.collection('feed').find({}).toArray().then(function(feed) { 

            for (var i = 0; i < feed.length; i++) {
            	
           		if (decrypt(feed[i].pass) == req.body.pass) {
            	 	res.send("Password alredy Exists,Try New") 
            	}
            }   

            var passw = encrypt(req.body.pass);
				
			delete req.body._id; // for safety reasons
			db.collection('feed').insertOne({name:req.body.name,pass:passw});
			res.render('news',{body: {name:req.body.name,pass:passw}}) ;
				  

    	}).catch(function(e) {
    		console.log(e)
    	})
        
    
	}).catch(function(e) {
    		console.log(e)
    })

    
    

    //send( '<html><body><h3>'+req.body.name+'</h3><h3>'+req.body.email+'</h3><h3>'+req.body.comment+'</h3></body></html>');
});

app.get('/view-feedbacks',  function(req, res) {
    dbConn.then(function(db) {
        db.collection('feed').find({}).toArray().then(function(feed) {       
            		
            res.render('alldata',{body: feed}) 
            	
                    
        });
    });

});

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );