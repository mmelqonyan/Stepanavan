function connection() {

    var connection = require("./connection")();

    var db = "student";
    var table = "CREATE TABLE IF NOT EXISTS students (ID INT(10) AUTO_INCREMENT primary key,name VARCHAR(255) , surname VARCHAR(255) ,age INT(3) NOT NULL,price INT(2))";

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

module.exports = connection;