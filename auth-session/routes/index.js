var express = require('express');
var router = express.Router();
const { checkAuth } = require('../utils/utils')

/* GET home page. */
router.get('/',  checkAuth, function(req, res, next) {
  res.render('index', { title: 'Autenticação por usuário' });
});

module.exports = router;