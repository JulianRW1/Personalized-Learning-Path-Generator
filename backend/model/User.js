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
const bcrypt = require('bcryptjs');

const User = new Schema({
  username:{
    type:String,
    required: true,
    unique: true,
    trim: true},
  password: {
    type: String,
    required: true
  },
  email:{
    type:String,
    required: true,
    unique: true,
    trim: true
  },
  firstname:{
    type:String,
    required: true,
  },
  lastname:{
    type:String,
    required: true,
  },


});

// Hash the password before saving
User.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare password during login
User.methods.comparePassword = function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', User);
