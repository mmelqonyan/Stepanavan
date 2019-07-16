
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));





const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
//const bodyParser = require('body-parser');



const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM products';
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'055055',
    database:'react_sql'
});
connection.connect(err=>{
    if(err){
    return err;
    }
});

app.use(cors());
const data = [
    {
        title: 'hello1',
        text: 'text1'
    },
    {
        title: 'hello2',
        text: 'text2'
    },
    {
        title: 'hello3',
        text: 'text3'
    }
];



app.get('/', (req, res) => {
    return res.send('go to products');
});


app.get('/products', (req, res) => {
    connection.query(SELECT_ALL_PRODUCTS_QUERY,(err, results)=>{
        if(err){
            res.send(err);
        }else
        {
            return res.json({
                data: results
            });
        }
    });
    
});






//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser, urlencoded({ extended: true }));
// app.use(bodyParser.json());
// 



// app.get('/', (req, res) => {
//     return res.send('go to products');
// });

// app.get('/products', (req, res) => {
//     return res.send('go to products');
// });



// app.get('/posts/:id', (req, res) => {
//     console.log(req.params);
//     const id = req.params.id;
//     return res.send(posts[id]);
// });

// app.post('/posts', (req, res) => {
// const data = req.body;
// console.log(data);
// posts.push(data);
// return res.send(posts);
// });

app.listen(3000, () => console.log('Port is starting listening port 3000'));
