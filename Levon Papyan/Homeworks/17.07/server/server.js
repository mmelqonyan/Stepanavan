import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'
import MongoClient from 'mongodb'

const app = express();
const router = express.Router();
const PORT = 1337

app.use(cors());
app.use(router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


function sendToDb(what_obj){
  MongoClient.connect("mongodb://localhost:27017/test",{ useNewUrlParser: true }).then((connection)=> {
    connection.db("test")
      .collections()
      .then(collections => {
        console.log(what_obj);
        what_obj._id = Math.random();
        collections[0].insert(what_obj );
      }).then(e => {
        console.log(e);
      }).catch(e => {console.log(e);})
    
  });
}


app.post('/elac', (req, res) => {
  console.log(req.body); 
  sendToDb(req.body);
  res.send("Done");
})

app.get('/', (req, res) => {
  res.send("Done");
})

app.listen(PORT, () => console.log('Example app listening on port ' + PORT))





