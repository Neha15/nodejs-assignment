const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    birthday: {
        type: Date
    },
    comments: [{
        date: {
            type: Date,
            default: new Date()
        },        
        message: {
            type: String,
            default: ''
        }
    }]
    
});

module.exports = mongoose.model('user', userSchema);
