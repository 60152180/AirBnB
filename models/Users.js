var mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    Schema = mongoose.Schema;

var schema = new Schema({
  name: {type: String, required: true, trim: true},
  email: {type: String, required: true, index: true, unique: true, trim: true},
  password: {type: String},
  userType: {type: String, default: "traveler"},
  phone: {type: String, required: true, index: true, unique: true, trim: true},
  facebook: {id: String, token: String, photo: String}
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});

schema.methods.generateHash = function(password) {
  var salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

schema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

var User = mongoose.model('User', schema);

module.exports = User;