var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    auth:{
        email: {
            type: String,
            required: [true, 'Email is required']
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        }
    },
    gender: String,
    image: String
});

var User = mongoose.model('user', UserSchema);
module.exports = User;
