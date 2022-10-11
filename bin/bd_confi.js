let createPool = require('promise-mysql').createPool;

var options={
    host: 'localhost',
    user: 'root',
    password:'123456789',
    database:'movies',
    connectionLimit: 5000,
    insecureAuth: true
}

const mysqlPool = createPool(options);

module.exports = {
    connectionPool: mysqlPool,
    options: options
}