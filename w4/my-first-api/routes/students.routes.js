const router = require('express').Router()

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

// GET /
// return a list of all students
router.get('/', (request, response) => {
  response.json({
    students: students,
  })
})

// route parameters
// GET /students/:name
// return the student with the given name
router.get('/:name/', (request, response, next) => {
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
router.post('/', (request, response) => {
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

module.exports = router
