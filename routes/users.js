var express = require('express');
var router = express.Router();
const {User} = require('../db/schema')

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find()
  .then((users) => {
    res.render('users/index', {users})
  })
});

// Show One
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
  .then((user) => {
    res.render('users/show',{user})
  })
})

// Create
router.post('/', (req, res) => {
   User.create(req.body)
   .then((user) => {
    res.send(user)
     })
  })
  

module.exports = router;
