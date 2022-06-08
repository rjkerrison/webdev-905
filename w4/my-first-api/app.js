// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config')

// ℹ️ Connects to the database
require('./db')

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express')

const app = express()

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require('./config')(app)

// CUSTOM MIDDLEWARE
app.use((req, res, next) => {
  // if we add info onto req…
  req.robin = 'teacher'
  // move onto the next middleware/routing
  next()
})

app.use((req, res, next) => {
  // …we can access that info later
  console.log('req.robin', req.robin)
  // res.json({ robin: req.robin })
  next()
})

// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js

app.use('/api', require('./routes/index.routes'))
app.use('/auth', require('./routes/auth.routes'))
app.use('/market-visits', require('./routes/marketVisit.routes'))
app.use('/markets', require('./routes/market.routes'))
app.use('/bears', require('./routes/bear.routes'))

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app)

module.exports = app
