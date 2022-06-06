const router = require('express').Router()
const Bear = require('../models/Bear.model.js')

router.get('/', async (req, res, next) => {
  const bears = await Bear.find()
  console.log('bears')
  console.log(bears)

  res.json(bears)
})

router.post('/', async (req, res, next) => {
  const bearToCreate = req.body
  const bear = await Bear.create(bearToCreate)

  res.json(bear)
})

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router
