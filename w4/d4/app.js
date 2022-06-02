// import models
const { default: mongoose } = require('mongoose')
const helpers = require('./helpers.js')
const openConnection = require('./db/connect.js')
const Bear = require('./models/Bear.model.js')

helpers.stringsAreEqual('Robin', 'Röbïñ')

// connect to database
;(async function () {
  await openConnection()
  try {
    const createdBear = await Bear.create({
      name: 'Paddiwinnington',
      species: 'Poohruvian',
      favouriteFood: 'marmalade honey',
    })
    console.log(createdBear)
  } catch (error) {
    console.log(error.message)
  }
  await mongoose.connection.close()
})()

// do things with model
