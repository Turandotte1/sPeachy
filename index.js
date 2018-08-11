/*
		NPM modules
*/

const express = require('express');
const mongoose = require('mongoose');
const cookie = require('cookie-session');
const passport = require('passport');

/*
	data handlers
*/

const keys = require('./config/keys');
require('./models/User');
require('./middleware/passport');

try {
  mongoose.connect(keys.mongoURI);
	console.log('Connected to database: \x1b[32m[OK]\x1b[0m');
}
catch (error) {
  console.error(error);
};

/*
	App init + auth
*/

const app = express();
app.use(cookie({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookie]
	})
)
app.use(passport.initialize());
app.use(passport.session());
require('./controllers/authRoutes')(app);

/*
	Listen requests
*/

const PORT = process.env.PORT || 5000;
try {
	app.listen(PORT);
	console.log('App listens on port ' + PORT + ': \x1b[32m[OK]\x1b[0m');
}
catch (error) {
	console.error(error);
};
