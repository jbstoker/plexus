var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Plexus!' });
});

/* GET home page. */
router.get('/components', function(req, res, next) {
  res.render('components', { title: 'Plexus!' });
});

module.exports = router;
