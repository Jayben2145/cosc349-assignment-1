const { Sequelize, DataTypes } = require('sequelize');

// Replace with your actual database connection details
const sequelize = new Sequelize('blogdb', 'remote', 'burlywood995', {
  host: '172.0.0.1', // Replace with the IP address of your SQL server
  port: 3306, // Replace with the port number of your SQL server (default for MySQL is 3306)
  dialect: 'mysql', // Change this to the appropriate dialect (e.g., 'mysql', 'postgres', 'mssql')
  logging: false, // Set to true if you want to see SQL logs
});

// Define Blog model
const Blog = sequelize.define('Blog', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  }
});

// Sync database
sequelize.sync();

module.exports = { sequelize, Blog };
