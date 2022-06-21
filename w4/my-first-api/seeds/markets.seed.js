const Market = require('../models/Market.model.js')
const openConnection = require('../db/connect.js')

// SEED the database
// adding initial data from an external source (or handcoded)

const rawMarkets = require('./marches-decouverts.json')
const { default: mongoose } = require('mongoose')

// convert from their format to your format
function convertRawMarketToSchema(rawMarket) {
  const fields = rawMarket.fields

  return {
    name: fields.nom_long,
    daysOfWeek: daysOfWeekFromFields(fields),
    location: fields.localisation,
    product: convertProduct(fields.produit),
  }
}

function daysOfWeekFromFields(fields) {
  return {
    monday: fields.lundi === 1,
    tuesday: fields.mardi === 1,
    wednesday: fields.mercredi === 1,
    thursday: fields.jeudi === 1,
    friday: fields.vendredi === 1,
    saturday: fields.samedi === 1,
    sunday: fields.dimanche === 1,
  }
}

function convertProduct(product) {
  switch (product) {
    case 'Fleurs':
      return 'Flowers'
    default:
      product
  }
}

async function seedMarkets() {
  await openConnection()
  const convertedMarkets = rawMarkets.map(convertRawMarketToSchema)

  const createdMarkets = await Market.create(convertedMarkets)
  console.log(`Created ${createdMarkets.length} Markets.`)
  await mongoose.connection.close()
  console.log('Connection closed.')
}

seedMarkets()
