// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
//read data
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();

});

function afterConnection() {
    connection.query("SELECT * FROM burgers_db.burgers", function (err, res) {
        if (err) throw err;

        console.log(res);
        connection.end();
    });
}

module.exports = connection;