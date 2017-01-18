// Controller for home page

// This controller has only one method "render". Any method or property attach-
// ed to "exports" is public and can be accessed by caller. The "render" metho-
// d is passed to route. Therefore it obtains request and response objects.
exports.render = function(req, res) {
	// Parameter 1: index, tells which ejs template in views folder to render
	// Parameter 2: data object to be passed to ejs template
	res.render('index', {
		title: 'Home Title',
		content: 'Home page content'
	})
};