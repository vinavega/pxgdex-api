const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'nav',
  password: 'coconut',
  database: 'Pxg',
});

module.exports = connection;
