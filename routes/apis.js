var express = require('express');
var router = express.Router();
var service = require('../service/service');

/* GET users listing. */
router.get('/getmovies', function(req, res, next) {
  service.getMovies().then(response =>{
    res.send(response);
  })
  
});

module.exports = router;
