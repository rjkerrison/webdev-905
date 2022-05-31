const router = require('express').Router()

// GET /
router.get('/', (req, res) => {
  res.json({ message: 'Hey, cool guy!!!!!' })
})

router.get('/echo', (request, response) => {
  const time = new Date()

  response.json({
    url: request.originalUrl,
    queryString: request.query,
    time: time,
    isBreak: time.getHours() >= 11,
  })
})

// defining what is received
// when this file is called with "require()"
module.exports = router
