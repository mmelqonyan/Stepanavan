const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require("mongodb").MongoClient;
const mongo = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
const cors = require('cors');
const app = express();
const PORT = 3001;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {

    mongo.connect(function (err, client) {
        const db = client.db("LevonPapyan");
        const collection = db.collection("tvyalner");
        const query = { _id: 1 }
        const options = { "upsert": true };
        collection.updateOne(query, { $set: req.body }, options)
    });
})

app.get('/', (req, res) => {
    mongo.connect((err, client) => {
        const db = client.db("LevonPapyan");
        const collection = db.collection("tvyalner");
        collection.findOne({ '_id': 1 })
            .then(data => {
                res.send(data)
            })
    })
})








app.listen(PORT, () => console.log(`Server is started. Listening port ${PORT}`));