const { Sequelize } = require('sequelize');
const mysql = require('mysql2');

// MySQL database credentials
const database = 'product_db';
const username = 'root';
const password = 'root';
const host = 'localhost';

// Create a MySQL connection to check if the database exists
const connection = mysql.createConnection({
  host: host,
  user: username,
  password: password
});

// Connect to MySQL and check if the database exists
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL server');

  // Check if the database exists
  connection.query(`CREATE DATABASE IF NOT EXISTS ${database}`, (err) => {
    if (err) {
      console.error('Error creating database:', err);
      return;
    }
    console.log(`Database ${database} created or already exists`);
  });
});

// Initialize Sequelize with the database connection
const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'mysql'
});

module.exports = sequelize;
