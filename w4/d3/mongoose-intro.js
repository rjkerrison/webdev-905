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
const connection = mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    // finally, let's do something
    // TODO: use Course to insert, find, update, etc

    // Course.create({
    //   name: 'WebDev 905',
    //   startDate: new Date(2022, 4, 9),
    //   campus: 'Ironhack Paris',
    // })

    return Course.find()
  })
  .then((courses) => {
    console.log(courses)
    return mongoose.connection.close()
  })
  .catch((err) => {
    console.error(`Error connecting to mongo: ${MONGO_URI}.`, err)
  })
