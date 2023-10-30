require("dotenv").config({ path: ".env." + process.env.NODE_ENV + ".local" });
const mysql = require("mysql2");

const dbConfig = {
  host: process.env.SQL_HOST,
  port: process.env.SQL_PORT,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
};

const pool = mysql.createPool(dbConfig);

module.exports = pool.promise(); // Export the database connection pool
