const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.json({
    status: 'happy',
    appName: 'my-first-api',
  })
})

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router
