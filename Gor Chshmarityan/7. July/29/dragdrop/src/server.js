const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require("mongodb").MongoClient;
const mongo = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
const cors = require('cors');
const app = express();
const port = 3001;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.post('/register', (req, res) => {
    mongo.connect((err, client) => {
        const query = { _id: 0 }
        const db = client.db("users");
        const collection = db.collection("data");
        const options = { "upsert": true };
        console.log(req.body)
        collection.updateOne(query, { $set: { login: req.body.login, pass: req.body.pass } }, options)
        res.send('Success!')
    });
});
app.post('/login', (req, res) => {
    mongo.connect((err, client) => {
        const db = client.db("users");
        const collection = db.collection("data");
        const query = { _id: 0 };
        collection.findOne(query, (err, result) => {
            console.log(result.login)
            console.log(req.body.login)
            if (result.login == req.body.login && result.pass == req.body.pass) {
                res.send('ok');
            }
            else {
                res.send('no');
            }
        });
    });
});

app.listen(port, () => {
    console.log(`Listening ${port} port ... `);
});

