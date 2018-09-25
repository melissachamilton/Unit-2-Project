const mongoose = require('mongoose')
if (process.env.MONGODB_URI){
    mongoose.connect(process.env.MONGODB_URI); //{ useNewUrlParser: true }
  } else {
    mongoose.connect('mongodb://localhost/users')
  }
  
const Schema = require('./schema')

const { User, Event, Vendor } = Schema

// const newVendor = new Vendor({
//     type: 'DJ',
//     price: 350,
//     dueDate: '5/1/19',
// })

// const newEvent = new Event({
//     name: 'Our Wedding Day',
//     location: 'Atlanta GA',
//     date: '5/31/19',
//     time: '7 pm',
//     guestCount: 200,
//     vendors: [newVendor]
// })

// const newUser = new User({
//     username: 'Carmelita',
//     professional: 'yes',
//     events: [newEvent]
// })

const dj = new Vendor({type: 'DJ', price: 350, dueDate: '5/1/2019' })
const photographer = new Vendor({type: 'photographer', price: 750, dueDate: '3/1/2019'})
const caterer = new Vendor({type: 'caterer', price: 1500, dueDate: '3/1/2019'})
const retirement = new Event({name: 'Retirement Party', location: 'Boca Raton FL', date: '3/11/2019', time: '4 pm', guestCount: 50, vendors: [photographer] })
const birthday = new Event({name: '60th Birthday Party', location: 'Columbus GA', date: '9/30/2018', time: '2 pm', guestCount: 30, vendors: [caterer] })
const wedding = new Event ({name: 'Our Wedding', location: 'Atlanta', date: '5/31/2019', time: '7 pm', guestCount: 200, vendors:[dj]})
const nell = new User({username: 'Nell', professional: 'no', events: [birthday]})
const al = new User({username: 'Al', professional: 'no', events: [retirement]})
const carmelita = new User({username: 'Carmelita', professional: 'yes', events: [wedding, birthday, retirement]})

User.deleteMany()
    .then(()=> {
        return User.insertMany([nell, al, carmelita])
    })
    .then(()=> {
        console.log('seeded, closing connection')
        mongoose.connection.close()
    })

// newUser.save()
//     .then(data => {
//         console.log(data)
//         console.log('Done Seeding!')
//         mongoose.connection.close()
//     })