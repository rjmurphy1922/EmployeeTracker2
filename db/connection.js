
const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Mysql2021",
    database:  "EMPLOYEE_DB"
});

connection.connect((err) => {
    if (err) throw err;
});

connection.query = util.promisify(connection.query);

module.exports = connection;
