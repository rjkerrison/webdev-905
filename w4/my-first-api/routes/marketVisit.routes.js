const router = require('express').Router()
const { isValidObjectId } = require('mongoose')
const Bear = require('../models/Bear.model.js')
const Market = require('../models/Market.model.js')
const MarketVisit = require('../models/MarketVisit.model.js')

router.get('/', async (req, res, next) => {
  const marketVisits = await MarketVisit.find().populate(
    'bear market',
    'name location favouriteFood'
  )
  // .populate({
  //   path: 'bear',
  //   match: { favouriteFood: 'honey' },
  //   select: 'name',
  // })
  console.log('MARKET VISITS')
  console.log(marketVisits)

  //   const promises = marketVisits.map(async (marketVisit) => {
  //     const { bear, market } = marketVisit
  //     console.log({ bear, market })
  //     const foundBear = await Bear.findById(bear)
  //     marketVisit.bear = foundBear
  //   })
  //   await Promise.all(promises)

  res.json(marketVisits)
})

router.post('/', async (req, res, next) => {
  try {
    let { bear, market, visitTime } = req.body
    if (!isValidObjectId(bear)) {
      const foundBear = await Bear.findOne({ name: bear })
      if (foundBear) {
        bear = foundBear._id
      } else {
        res.status(400).json({
          message:
            'Please provide a valid object id for "bear" or an existing bear name.',
          image: 'https://http.cat/400',
        })
        return
      }
    }
    if (!isValidObjectId(market)) {
      const foundMarket = await Market.findOne({ name: { $regex: market } })
      if (foundMarket) {
        market = foundMarket._id
      } else {
        res.status(400).json({
          message:
            'Please provide a valid object id for "market" or an existing market name.',
        })
        return
      }
    }

    const { _id } = await MarketVisit.create({
      bear,
      market,
      visitTime,
    })
    const populatedVisit = await MarketVisit.findById(_id).populate(
      'bear market'
    )

    res.json(populatedVisit)
  } catch (error) {
    next(error)
  }
})

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router
