const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VendorSchema = new Schema({
    type: String,
    price: Number,
    dueDate: String,
})

const EventSchema = new Schema({
    name: String,
    location: String,
    date: String,
    time: String,
    guestCount: Number,
    vendors: [VendorSchema]
})

const UserSchema = new Schema({
    username: String,
    professional: String,
    events: [EventSchema]
})

const VendorModel = mongoose.model('Vendor', VendorSchema)
const EventModel = mongoose.model('Event', EventSchema)
const UserModel = mongoose.model('User', UserSchema)

module.exports = {
    Vendor: VendorModel,
    Event: EventModel,
    User: UserModel
}