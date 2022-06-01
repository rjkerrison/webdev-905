// first, we need the mongoose package
const mongoose = require('mongoose')

const moduleSchema = new mongoose.Schema({
  name: mongoose.SchemaTypes.String,
  lessons: [],
})

// second, we need to define a model (it defines the relationship between our code and mongoDB)
const courseSchema = new mongoose.Schema({
  name: { type: mongoose.SchemaTypes.String, required: true },
  startDate: mongoose.SchemaTypes.Date,
  campus: mongoose.SchemaTypes.String,
  teachers: [{ name: mongoose.SchemaTypes.String }],
  syllabus: {
    modules: [moduleSchema],
    projects: [],
  },
})

const Course = mongoose.model('Course', courseSchema)

// third, we need to connect to mongoose
const MONGO_URI = 'mongodb://localhost:27017/webdev-905'
// TODO: connect

function createCourse() {
  return Course.create({
    name: 'UX 905',
    startDate: new Date(2022, 4, 9),
    campus: 'Ironhack Paris',
  })
}

async function executeDatabaseThings() {
  try {
    const connection = await mongoose.connect(MONGO_URI)
    console.log(
      `Connected to Mongo! Database name: "${connection.connections[0].name}"`
    )
  } catch (err) {
    console.error(`Error connecting to mongo: ${MONGO_URI}.`, err)
    return
  }
  await createCourse()

  const courses = await Course.find()
  console.log(courses)
  return mongoose.connection.close()
}

executeDatabaseThings()
