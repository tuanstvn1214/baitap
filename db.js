const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'sql12.freemysqlhosting.net',
  user: 'sql12646718',
  password: 'IrHz6WVuTY',
  database: 'sql12646718',
  port: 3306
})

connection.connect((err, asd) => {
  console.log(err);
  connection.query('CREATE TABLE table_name (column1 integer)', (errr) => {
    console.log(errr);
  })
})
module.exports.db = connection



