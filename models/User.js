var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: { type: String, required: true, index: { unique: true } },
    address: String,
    password: { type: String, required: true }
   // wallet:Number
});

module.exports = mongoose.model('User', UserSchema);