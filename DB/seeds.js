const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/users')

const Schema = require('./schema')

const { User, Event, Vendor } = Schema

const dj = new Vendor({
    type: 'DJ',
    price: 350,
    dueDate: '5/1/19',
})

const wedding = new Event({
    name: 'Our Wedding Day',
    location: 'Atlanta GA',
    date: '5/31/19',
    time: '7 pm',
    guestCount: 200,
    vendors: [dj]
})

const coordinator = new User({
    username: 'Carmelita',
    professional: 'yes',
    events: [wedding]
})

coordinator.save()
    .then(data => {
        console.log(data)
        console.log('Done Seeding!')
        mongoose.connection.close()
    })