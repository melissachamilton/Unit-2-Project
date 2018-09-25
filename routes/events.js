var express = require('express');
var router = express.Router({mergeParams:true});
const {User, Event} = require('../db/schema')
var method = require('method-override')

// Show All
router.get('/',function(req, res, next) {
  User.findById(req.params.userId)
  .then((user) => {
    const events = user.events
    res.render('events/index',{
      events,
      userId: req.params.userId
    })
  })
  .catch(error => {
    console.log(error)
  })
});

// // New Form
    
router.get('/new', (req, res) => {
  // res.send ("New event form works")
  res.render('events/new')
})
// EDIT, RENDER EDIT FORM
// router.get('/:id/edit', (req, res) => {
//   User.findById(req.params.id)
//     .then((user) => {
//       res.render('events/edit', {
//         user
//       })
//       // res.redirect('/users')
//     })
// })

// Show One
router.get('/:id', (req, res) => {
  User.findById(req.params.userId)
  .then((user) => {
    res.render('events/show', {
      userId: req.params.userId,
      event: user.events.id(req.params.id)
      // userId: req.params.userId
  })
})
})

// // Create
router.post('/events', (req, res) => {
   User.create(req.body)
   .then((user) => {
    res.redirect(`/users/${user._id}/events`)
     })
  })

//   // Delete
//   router.delete('/:id', (req, res) => {
//     User.findByIdAndRemove(req.params.id)
//      .then(() => {
//      res.redirect('/users')
//    })
//   })
    

  
module.exports = router
