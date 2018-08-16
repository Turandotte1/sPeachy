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
	},
	async (accessToken, refreshToken, profile, done) => {
			const exist = await User.findOne ({
					googleID: profile.id });
			if (exist) {
				return done(null, exist);
			}
			const newUser = await new User ({
				googleID: profile.id }).save();
			done(null, newUser);
		}
	)
);
