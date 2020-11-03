const express = require('express')
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy

// Configure the Facebook strategy for use by Passport.
//
// OAuth 2.0-based strategies require a `verify` function which receives the
// credential (`accessToken`) for accessing the Facebook API on the user's
// behalf, along with the user's profile.  The function must invoke `cb`
// with a user object, which will be set at `req.user` in route handlers after
// authentication.
passport.use(new FacebookStrategy({
    clientID: process.env.AUTH_STRATEGY_FACEBOOK_CLIENT_ID,
    clientSecret: process.env.AUTH_STRATEGY_FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.AUTH_STRATEGY_FACEBOOK_CLIENT_CALLBACK_URI,
  },
  function (accessToken, refreshToken, profile, cb) {
    // In this example, the user's Facebook profile is supplied as the user
    // record.  In a production-quality application, the Facebook profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.
    return cb(null, profile)
  }))

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Facebook profile is serialized
// and deserialized.
passport.serializeUser(function (user, cb) {
  cb(null, user)
})

passport.deserializeUser(function (obj, cb) {
  cb(null, obj)
})

const app = express()

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
}))
app.use(require('cookie-parser')())

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize())
app.use(passport.session())

app.get('/login/facebook',
  passport.authenticate('facebook'))

app.get(`${process.env.AUTH_STRATEGY_FACEBOOK_CLIENT_CALLBACK_URI}`,
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function (req, res) {
    res.redirect('/')
  })

app.get('/profile',
  require('connect-ensure-login').ensureLoggedIn({
    redirectTo: '/login/facebook',
    setReturnTo: '/profile',
  }),
  function (req, res) {
    res.json({ user: req.user })
  })

app.listen(process.env.APP_PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.APP_PORT}`)
})
