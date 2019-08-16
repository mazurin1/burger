// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
//read data


var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "o3iyl77734b9n3tg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "smw9c41s52w50x31",
    password: "zr1y8ejt9tjnx4yf",
    database: "mbo3veq5b8er176d"
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
        //connection.end();
    });
}

module.exports = connection;