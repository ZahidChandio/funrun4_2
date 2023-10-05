var express = require('express');
var router = express.Router();
const Run = require('../models/Run'); // Adjust the import paths as needed
const User = require('../models/User');
const Registration = require('../models/Registration');

// ... (rest of the code)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fun Run' });
});

module.exports = router;
