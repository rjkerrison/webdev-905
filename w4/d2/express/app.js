// This is where we will live code a basic express server

// import the express functionality
const express = require('express')
const app = express()
const port = 3000

// configuration
// use a JSON middleware parser
app.use(express.json())

// GET /
app.get('/', (req, res) => {
  res.json({ message: 'Hey, cool guy!!!!!' })
})

app.get('/echo', (request, response) => {
  const time = new Date()

  response.json({
    url: request.originalUrl,
    queryString: request.query,
    time: time,
    isBreak: time.getHours() >= 11,
  })
})

const students = [
  { name: 'Begonia', grade: 'Cucumber' },
  { name: 'Sébastien', grade: 'Banana' },
]

const validGrades = [
  'Apple',
  'Cucumber',
  'Banana',
  'Kiwi',
  'Blueberry',
  'Clémentine',
]

function areSameWithoutAccentsOrCase(a, b) {
  return a.localeCompare(b, 'en', { sensitivity: 'base' }) === 0
}

// GET /students
// return a list of all students
app.get('/students', (request, response) => {
  response.json({
    students: students,
  })
})

// route parameters
// GET /students/:name
// return the student with the given name
app.get('/students/:name/', (request, response, next) => {
  const name = request.params.name

  const student = students.find((x) => x.name === name)

  if (!student) {
    next()
    // response.status(404).json({
    //   message: `Could not find student with name ${name}`,
    // })
    return
  }

  response.json(student)
})

// POST /students
// return a list of all students
app.post('/students', (request, response) => {
  const student = request.body

  // data validation that request.body is in the correct format
  // - name
  // - grade
  if (!student.name || typeof student.name !== 'string') {
    response.status(400).json({
      message: 'Student name not provided',
    })
    return
  }

  if (
    !student.grade ||
    !validGrades.some((x) => areSameWithoutAccentsOrCase(x, student.grade))
  ) {
    response.status(400).json({
      message: `Grade is not valid. Please choose from: ${validGrades.join(
        ', '
      )}`,
    })
    return
  }

  students.push(request.body)

  response.status(201).json({
    message: 'message received!',
    body: request.body,
  })
})

// GET /deliberate/error
app.get('/deliberate/error', (request, response, next) => {
  throw new Error('hello')
})

// Handle unmatched routes
app.use((req, res, next) => {
  res.status(404).json({
    message: `Route not found: ${req.originalUrl}`,
  })
})

// Handle internal errors
app.use((error, req, res, next) => {
  console.error('ERROR', error.message)

  res.status(500).json({
    message: `Internal server error`,
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
