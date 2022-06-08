const isAuthenticated = require('./isAuthenticated')

const isAdmin = async (req, res, next) => {
  const { role } = req.user
  if (role !== 'admin') {
    res.status(403).json({
      message: 'You are not an admin',
    })
  }

  next()
}

// combining them
const isAuthenticatedAndAdmin = (req, res, next) => {
  // To set "next" manually, we need to create a callback
  isAuthenticated(req, res, () => isAdmin(req, res, next))
}

module.exports = isAdmin
