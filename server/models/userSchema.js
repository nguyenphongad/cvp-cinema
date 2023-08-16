const mongoose = require('mongoose');

const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
});

const UserModel = mongoose.model('user-customers', userSchema);
module.exports = UserModel 