var express = require('express');
var router = express.Router({mergeParams:true});
const {User, Event} = require('../db/schema')
var method = require('method-override')

// Show All
router.get('/',function(req, res, next) {
  User.findById(req.params.userId)
  .then((user) => {
    const events = user.events
    res.render('events/index',{events
    })
  })
  .catch(error => {
    console.log(error)
  })
});

// // New Form
    
router.get('events/new', (req, res) => {
  res.send ("New event form works")
  // res.render('events/new')
})

// Show One
router.get('/:id', (req, res) => {
  User.findById(req.params.userId)
  .then((user) => {
    // const events = event.vendors
    res.send(user.events.id(req.params.id)
  })
})

// // Create
// router.post('/', (req, res) => {
//    User.create(req.body)
//    .then((user) => {
//     res.redirect(`/users/${user._id}`)
//      })
//   })

//   // Delete
//   router.delete('/:id', (req, res) => {
//     User.findByIdAndRemove(req.params.id)
//      .then(() => {
//      res.redirect('/users')
//    })
//   })
    

  
module.exports = router;
