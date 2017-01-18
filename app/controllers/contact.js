exports.render = function(req, res) {
	// Parameter 1: contact, tells which ejs template in views folder to render
	// Parameter 2: data object to be passed to ejs template
	res.render('contact', {
		title: 'Contact Title',
		content: 'Contact page content'
	})
};