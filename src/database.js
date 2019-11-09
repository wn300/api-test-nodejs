const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "lolyz0ok3stvj6f0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "yt8jn2272dt0okrq",
  password: "nnd7qmd1ezeme99n",
  database: "dzhm91j6eqm1r7w4"
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.log(err);
        return
    }else{
        console.log('DB Conection OK');
    }
});

module.exports = mysqlConnection;