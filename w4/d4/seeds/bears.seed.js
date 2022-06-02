const Bear = require('../models/Bear.model.js')
const openConnection = require('../db/connect.js')
const { default: mongoose } = require('mongoose')

// SEED the database
// adding initial data from an external source (or handcoded)

const bears = [
  { name: 'Winnie', species: 'Pooh', favouriteFood: 'honey' },
  { name: 'Rupert', species: 'Scarf', favouriteFood: 'unknown' },
  { name: 'Booba', species: 'Brown', favouriteFood: 'jewellery' },
]

async function seedBears() {
  await openConnection()
  const createdBears = await Bear.create(bears)
  console.log(`Created ${createdBears.length} bears.`)
  await mongoose.connection.close()
  console.log('Connection closed.')
}

seedBears()
