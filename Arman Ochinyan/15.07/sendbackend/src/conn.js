function connection() {

    var connection = require("./connection")();
   
    var db = "products";
    var table = "CREATE TABLE IF NOT EXISTS product (ID INT(10) AUTO_INCREMENT primary key,name VARCHAR(255) , tesak VARCHAR(255) ,price INT(7))engine=InnoDB default charset=utf8";

    var mysql = require('mysql');


    connection.connect(function(err) {
        if (err) throw err;

        console.log("Connected!");
           
        connection.query("CREATE DATABASE if not exists products ", function (err, result) {
            if (err) throw err;
            console.log("Database created");

            connection.query(table, function (err, result) {
            if (err) throw err;
            console.log("Table created");
          });
        });
    });








    connection.query('CREATE DATABASE IF NOT EXISTS ??', db, function(err, results) {
        if (err) {
            console.log('error in creating database', err);
            return;
        }

        console.log('created a new database');
 
        connection.changeUser({
            database : db
        }, function(err) {
        if (err) {
            console.log('error in changing database', err);
            return;
        }

            connection.query(table, function(err) {
                if (err) {
                    console.log('error in creating tables', err);
                    return;
                }

                console.log('created a new table');
                
            });
        });
    });
}
connection();
