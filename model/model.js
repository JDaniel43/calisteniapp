let connectionPool = require('../bin/bd_confi').connectionPool;

exports.getMovies = () =>{
    let query = 'select * from movies.movies';
    return connectionPool.query(query)
};