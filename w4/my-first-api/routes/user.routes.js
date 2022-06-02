const router = require('express').Router()
const User = require('../models/User.model.js')

router.get('/', async (req, res, next) => {
  const users = await User.find()
  console.log('USERS')
  console.log(users)

  res.json(users)
})

router.post('/', async (req, res, next) => {
  const userToCreate = req.body
  const createdUser = await User.create(userToCreate)

  res.json(createdUser)
})

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router
