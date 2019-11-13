"use strcit";

const mysql = require("mysql");
const Schema = mysql.Schema;

const EmployeeSchema = Schema({
  id: Number,
  name: String,
  last_name: String,
  identification: Number,
  phone: Number,
  email: String,
  birday: Date
});

