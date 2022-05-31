// This is where we will live code a basic express server

// import the express functionality
const express = require('express')
const app = express()
const port = 3000

// configuration
// use a JSON middleware parser
app.use(express.json())

const indexRouter = require('./routes/index.routes.js')
app.use('/', indexRouter)
const studentsRouter = require('./routes/students.routes.js')
app.use('/students', studentsRouter)

// GET /deliberate/error
app.get('/deliberate/error', (request, response, next) => {
  throw new Error('hello')
})

const addErrorHandling = require('./error-handling.js')
addErrorHandling(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
