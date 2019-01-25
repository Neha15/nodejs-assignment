const User = require('./user.model');

//To create a user in mongodb
function createUser(req, res, next) {
  var newUser = new User(req.body); 
  newUser.save()
    .then(function(user) {      
        res.status(201).json(user);
    })
    .catch(err => {
        res.status(500).json(err);
    });
}

// To get all the users present in mongodb
function getUsers(req, res, next) {
    User.find().exec().then(users => {
        res.status(200).json(users);
    }).catch(err => {
        res.status(500).json(err);
    });
}

// To get the particular user details ***/
function getUserDetails(req, res, next) {   
    return User.findOne({
        _id: req.params.userId
    }).exec()
    .then(res => {
        if(!res) {
            res.status(404).end();
            return null;
        }
        return res;
    }).then(user => {        
        res.status(200).json(user);
    }).catch(err => {
        res.status(500).json(err);
    });
}

module.exports = {createUser, getUsers, getUserDetails}