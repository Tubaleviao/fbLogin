var FacebookStrategy = require('passport-facebook').Strategy;

module.exports={
	strategy: new FacebookStrategy({
			clientID: '<your_client_ID>',
			clientSecret: '<your_client_secret>',
			callbackURL: 'http://localhost:3000/auth/facebook/callback'
		},
		function(accessToken, refreshToken, profile, done) {
			process.nextTick(function () {

			  // TODO: store profile in Database

			  return done(null, profile);
			});
		}),
	serialize: function(user, done) {
		  done(null, user);
		},
	deserialize: function(obj, done) {
		  done(null, obj);
		}
}
