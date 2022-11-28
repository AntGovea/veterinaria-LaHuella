import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "../config";
var mysql = require("mysql");


export const pool = mysql.createPool({
  connectionLimit : 10,
  host: DB_HOST,
  user: DB_USER,
  port:DB_PORT,
  password: DB_PASSWORD,
  database: DB_NAME,
});
