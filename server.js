// This file is the starting point for node.js to run

// Include Express
// =============================================
var express = require('express');
var app = express();

// EJS setup
// =============================================
// Setting folder where ejs files reside
app.set('views', './app/views');
// Set ejs as template engine
app.set('view engine', 'ejs');

// Routes setup
// =============================================
// Set route files
require('./app/routes/routes.js')(app);

// Set static files folder. All static files like css, js and images are placed
// in "public" folder
app.use(express.static('./public'));

// Start and Listen to incoming request
// =============================================
// Listening to port 3000 when server.js is started
app.listen(3000);
console.log('Server running at http://localhost:3000/');