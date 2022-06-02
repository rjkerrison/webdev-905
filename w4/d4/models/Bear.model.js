const { Schema, SchemaTypes, model } = require('mongoose')

const bearSchema = new Schema({
  name: SchemaTypes.String,
  species: {
    type: SchemaTypes.String,
    enum: ['Pooh', 'Peruvian', 'Scarf', 'Brown', 'Teddy', 'Gummy', 'Care'],
    required: true,
  },
  favouriteFood: SchemaTypes.String,
})

const Bear = model('Bear', bearSchema)

module.exports = Bear
