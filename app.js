var express = require('express')
  , passport = require('passport')
  , session = require('express-session')
  , fb = require('./fbConf')
  , passFuncs = require('./passFuncs');

passport.serializeUser(fb.serialize);
passport.deserializeUser(fb.deserialize);

passport.use(fb.strategy);

var app = express();

  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(session({ secret: 'keyboard cat', saveUninitialized: true, resave: false }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
  res.render('index', { user: req.user });
});

app.get('/login', function(req, res){
  res.render('login', { user: req.user });
});

app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback', 
  passport.authenticate('facebook', { failureRedirect: '/login', successRedirect: '/'}));

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.listen(3000, function(){
  console.log('Running on port 3000');
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}
