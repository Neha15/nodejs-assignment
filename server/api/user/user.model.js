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
        type: String
    },
    comments: [{
        date: {
            type: String
        },        
        message: {
            type: String
        }
    }]
    
});

module.exports = mongoose.model('user', userSchema);