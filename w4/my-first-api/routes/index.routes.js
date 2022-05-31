const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.json({
    status: 'hungry',
    appName: 'my-first-api',
    classmates: [
      'Robin',
      'Hugueaux',
      'Chataléré',
      'Oeufs Bénédicte',
      'Bégonia',
      'Arthur',
      'Xébaxtian le basque, le GOAT',
      'Val-de-Marne',
      'Adrien',
      'I am the best :)',
      'Romain hoo!',
      'Pierre',
      'Caetaneau, the last!',
      'Tzuyu',
      'Stephane',
    ],
  })
})

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router
