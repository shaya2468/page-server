const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
const uniqueValidator = require('mongoose-unique-validator');
var UserSchema = new mongoose.Schema({
  
  name: {
    type: String,
    unique: true,
    required: [true, 'name is mandatory'],
    minlength: 2
  }
});

UserSchema.plugin(uniqueValidator);

UserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'name']);
};

UserSchema.statics.findByName = function (name) {
  var User = this;

  return User.findOne({
    'name': name
  });
};

var User = mongoose.model('user', UserSchema);

module.exports = {User}
