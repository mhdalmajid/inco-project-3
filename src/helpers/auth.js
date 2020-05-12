const { compare, hash } = require('bcryptjs')
const createError = require('http-errors')

const hashPassword = async (password) => hash(password, 8)
const comparePassword = async (requestPassword, passwordInDbB) =>
  compare(requestPassword, passwordInDbB)

const routeProtector = async (req, res, next) => {
  if (req.session && req.session.email) return next()
  throw createError(401, 'Unauthorized')
}

const destroySession = async (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      next(err)
    } else {
      res.redirect('/login')
    }
  })
}
module.exports = {
  hashPassword,
  comparePassword,
  routeProtector,
  destroySession,
}
