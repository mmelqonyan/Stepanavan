const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require("mongodb").MongoClient;
const mongo = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
const cors = require('cors')
const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.post('/',function(req,res){
   
    mongo.connect(function(err, client){
        const db = client.db("paragraf");
       const collection = db.collection("klorik");
       const query = {_id: 4}
       const options = { "upsert": true };
       collection.updateOne(query,{$set:req.body} , options)
   });
})

app.get('/', (req, res)=>{
    mongo.connect(function(err, client){
        const db = client.db("paragraf");
        const collection = db.collection("klorik");
        collection.findOne({'_id': 4})
        .then(e=>{
            res.send(e)
        })
    })
})



app.listen(3001, function () {
   console.log('Example app listening on port 3000!');
 });
