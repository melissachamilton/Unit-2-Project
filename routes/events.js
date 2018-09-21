var express = require('express');
var router = express.Router();
const {User} = require('../db/schema')
var method = require('method-override')

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find()
  .then((users) => {
    res.render('users/index', {users})
  })
});

// New Form
    
router.get('/new', (req, res) => {
  res.render('users/new')
})

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
    res.redirect(`/users/${user._id}`)
     })
  })

  // Delete
  router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id)
     .then(() => {
     res.redirect('/users')
   })
  })
    

  
module.exports = router;
