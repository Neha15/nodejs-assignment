'use strict';

var Router = require('express');
var userController =  require('./user.controller');

var router = new Router();

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/:userId', userController.getUserDetails);

module.exports = router;
