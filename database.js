const mysql = require('mysql2');

// Create a connection to the database
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '#Mini555',
    database: 'digitalizedidir'
})

// An async function to use await
module.exports = pool

    

// Invoke the async function



