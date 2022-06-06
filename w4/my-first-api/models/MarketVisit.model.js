const { Schema, SchemaTypes, model } = require('mongoose')

// represent one visit at one time by one bear to one market
const marketVisitSchema = new Schema({
  bear: {
    type: SchemaTypes.ObjectId,
    ref: 'Bear',
  },
  market: {
    type: SchemaTypes.ObjectId,
    ref: 'Market',
  },
  visitTime: SchemaTypes.Date,
})

const MarketVisit = model('MarketVisit', marketVisitSchema)

module.exports = MarketVisit
