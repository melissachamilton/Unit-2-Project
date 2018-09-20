const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VendorSchema = new Schema({
type: String,
price: Number,
due date: String,
})

const EventSchema = new Schema({
Name: String,
Location: String,
Date: String,
Time: String,
Guest Count: Number,
Vendors: [VendorSchema]
})

const UserSchema = new Schema({
username: String,
Professional Planner: String,
Events: [EventSchema]
})

const VendorModel = mongoose.model('Vendor', GigSchema)
const EventModel = mongoose.model('Event', BandSchema)
const UserModel = mongoose.model('User', UserSchema)

module.exports = {
Gig: GigModel,
Band: BandModel,
User: UserModel
}