const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "q68u8b2buodpme2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "col2vta1qq6r8nq8",
  password: "h15aozlqefu7j6ys",
  database: "s5b9kkquli4obw2w"
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.log(err);
        return
    }else{
        console.log('Conection OK');
    }
});

module.exports = mysqlConnection;