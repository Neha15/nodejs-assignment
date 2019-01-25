module.exports = function(app) {
	app.use('/api/users', require('./api/user'));
}