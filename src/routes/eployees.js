const express = require("express");
const router = express.Router();

const mysqlConnection = require("../database");
const multipart = require("connect-multiparty");
const _xlsx = require("node-xlsx");
const multipartMidleware = multipart();

var json2xls = require('json2xls');

const fs = require("fs");

router.use(json2xls.middleware);

router.get("/api/employees", (req, res) => {
  mysqlConnection.query("select * from employee", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.post("/api/employees/upload_file", multipartMidleware, (req, res) => {
  console.log(req.files);

  const path = req.files.uploads.length > 0 ? req.files.uploads[req.files.uploads.length - 1].path : req.files.uploads.path;

  const workSheetsFromFile = _xlsx.parse(path);
  workSheetsFromFile[0].data.splice(0, 1);

  var sql =
    "INSERT INTO employee (name,last_name,identification,phone,email) VALUES ?";
  var values = workSheetsFromFile[0].data;
  mysqlConnection.query(sql, [values], (err, rows, fields) => {
    if (!err) {
      mysqlConnection.query("select * from employee", (err, rows, fields) => {
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      });     

      fs.unlink(path, err => {
        if (err) throw err;
        console.log("Archivo elimnado");
      });
    } else {
      console.log(err);
    }
  });
});

router.get('/api/employees/file',function(req, res) {
  mysqlConnection.query("select * from employee", (err, rows, fields) => {
    if (!err) {
      res.xls('empleados.xlsx', rows);
    } else {
      console.log(err);
    }
  });
 
});

module.exports = router;
