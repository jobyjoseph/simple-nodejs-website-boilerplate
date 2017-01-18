exports.render = function(req, res) {
	// Parameter 1: about-us, tells which ejs template in views folder to render
	// Parameter 2: data object to be passed to ejs template
	res.render('about-us', {
		title: 'About Us Title',
		content: 'About Us page content'
	})
};