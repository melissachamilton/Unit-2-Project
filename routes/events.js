var express = require('express');
var router = express.Router({mergeParams:true});
const {User} = require('../db/schema')
var method = require('method-override')

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
    
// router.get('/new', (req, res) => {
//   res.render('users/new')
// })

// // Show One
// router.get('/:id', (req, res) => {
//   User.findById(req.params.id)
//   .then((user) => {
//     res.render('users/show',{user})
//   })
// })

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
