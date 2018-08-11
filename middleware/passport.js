const passport = require('passport');
const Google = require('passport-google-oauth20');
const mongoose = require('mongoose');

const keys = require('../config/keys');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
		done(null, user.id);
});

passport.deserializeUser((id, done) => {
		User.findById(id)
			.then(user => {
				done(null, user);
		});
});

passport.use(new Google (
{
	clientID: keys.googleID,
	clientSecret: keys.googleSecret,
	callbackURL: '/auth/google/callback',
	proxy: true
}, 	(accessToken, refreshToken, profile, done) => {
		User.findOne({
			googleID: profile.id
		}).then((existingUser) => {
			if (existingUser) {
				done(null, existingUser);
			}
			else {
				new User({
					googleID: profile.id })
				.save()
				.then(user => done(null, user));
			}
		});
	}
));
