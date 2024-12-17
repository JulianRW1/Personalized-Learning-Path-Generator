// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
// const passportLocalMongoose = require('passport-local-mongoose');
// var User = new Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// })

// User.plugin(passportLocalMongoose);

// module.exports = mongoose.model('User', User)

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
