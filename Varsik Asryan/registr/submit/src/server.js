const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require("mongodb").MongoClient;
const mongo = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.post('/',function(req,res){
   mongo.connect(function(err, client){

       const db = client.db("varsik");27017
       const collection = db.collection("data");
       collection.insertOne({aa:req.body}, function(err, result){

           console.log(req.body)
       });
   });
})
 

app.listen(3001, function () {
   console.log('Example app listening on port 3000!');
 });
