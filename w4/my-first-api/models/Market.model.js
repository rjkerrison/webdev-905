const { Schema, SchemaTypes, model } = require('mongoose')

const marketSchema = new Schema({
  name: SchemaTypes.String,
  daysOfWeek: {
    monday: SchemaTypes.Boolean,
    tuesday: SchemaTypes.Boolean,
    wednesday: SchemaTypes.Boolean,
    thursday: SchemaTypes.Boolean,
    friday: SchemaTypes.Boolean,
    saturday: SchemaTypes.Boolean,
    sunday: SchemaTypes.Boolean,
  },
  location: SchemaTypes.String,
  product: SchemaTypes.String,
})

const Market = model('Market', marketSchema)

module.exports = Market
