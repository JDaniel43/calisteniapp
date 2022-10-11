var model = require('../model/model');
exports.getMovies = async ()  => {
    return await model.getMovies()
}