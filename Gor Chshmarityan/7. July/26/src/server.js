const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require("mongodb").MongoClient;
const mongo = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.post('/', function (req, res) {
    mongo.connect(function (err, client) {
        const db = client.db("paragraf");
        const collection = db.collection("klorik");
        const query = { _id: 4 };
        const options = { "upsert": true };
        collection.findOne({ '_id': 4 }, function (err, result) {
            if (result) {
                let check = result.title.includes(req.body.title);
                if (check) {
                    res.send('Your input exists.');
                }
                else {
                    const users = {
                        title: result.title
                    };
                    users.title.push(req.body.title);
                    collection.updateOne(query, { $set: users }, options);
                    res.send('Your input have been added to database.');
                }
            }
            else {
                const users = {
                    title: [req.body.title]
                };
                collection.updateOne(query, { $set: users }, options);
                res.send('New database collection was created, and your input added.');
            }
        });
    });
});
app.listen(3001, function () {
    console.log('App listening on port 3001!');
});
