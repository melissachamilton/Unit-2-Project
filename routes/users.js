var express = require('express');
var router = express.Router();
const { User } = require('../db/schema.js')
var method = require('method-override')

/* GET users listing. */
router.get('/', function (req, res, next) {
  User.find()
    .then((users) => {
      res.render('users/index', {
        users
      })
    })
});

// New Form

router.get('/new', (req, res) => {
  res.render('users/new')
})

// EDIT, RENDER EDIT FORM
router.get('/:id/edit', (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.render('users/edit', {
        user
      })
      // res.redirect('/users')
    })
})

// Show One
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.render('users/show', {
        user
      })
    })
})

// Create
router.post('/', (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.redirect('/users')
    })
})

// UPDATE
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((userFromDB) => {
      // const userId = userFromDB._id
      // console.log("HERES MY USER", userFromDB)
      // console.log("HERES MY USER ID", userId)
      res.redirect(`/users/${userFromDB._id}`)
      // res.redirect('/users/' + userFromDB._id)
      // res.redirect(`/users/${userFromDB._id}/events/${events._id}/venders/${vender._id}`)
    })
    .catch(error => {
      console.log(error)
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