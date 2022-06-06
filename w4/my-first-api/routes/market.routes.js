const router = require('express').Router()
const Market = require('../models/Market.model.js')

router.get('/', async (req, res, next) => {
  const markets = await Market.find()
  console.log('MARKETS')
  console.log(markets)

  res.json(markets)
})

router.post('/', async (req, res, next) => {
  const marketToCreate = req.body
  const market = await Market.create(marketToCreate)

  res.json(market)
})

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router
