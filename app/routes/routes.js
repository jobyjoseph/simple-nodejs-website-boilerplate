// Require needed controllers
// =============================================
var index = require('../controllers/index');
var about_us = require('../controllers/about-us');
var contact = require('../controllers/contact');

// Routes setup
// =============================================
module.exports = function(app) {
	app.route('/').get(index.render);
	app.route('/about-us').get(about_us.render);
	app.route('/contact').get(contact.render);
};