var express = require('express');
var router = express.Router();
const {User} = require('../db/schema')

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find()
  .then((users) => {
    res.send(users)
  })
});

module.exports = router;
