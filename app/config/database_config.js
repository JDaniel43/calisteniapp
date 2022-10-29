let  createPool = require('promise-mysql').createPool

var options = {
    host: 'localhost',
    user: "root",
    password: "FundableD0ubles",
    database: "calisteniapp",
    connectionLimit: 5000,
}

const mysqlPool = createPool(options)

module.exports = {
    connectionPool: mysqlPool,
    options: options
}