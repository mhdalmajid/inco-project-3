/* eslint-disable consistent-return */
const express = require('express')

const router = express.Router()
const { catchAsync } = require('../helpers/catchAsync.js')
const { routeProtector, destroySession } = require('../helpers/auth.js')
const { createUser, getUserByEmailAndPassword } = require('../models/users')

const createUserController = async (req, res, next) => {
  let { email, password } = req.body
  let result = await createUser(req.body)

  res.render('index')
}
const loginAuthController = async (req, res, next) => {
  const { email, password } = req.body
  let user = await getUserByEmailAndPassword(email, password)
  console.log(user)
  console.log(user.length)
  if (user.length > 0) {
    req.session.email = email
    res.redirect('/')
  } else {
    next()
  }
}

const indexController = async (req, res, next) => res.render('index')

const renderLoginController = async (req, res) => res.render('login')

router.get('/', catchAsync(routeProtector), catchAsync(indexController))
router.post('/signup', catchAsync(createUserController))
router.get('/login', catchAsync(renderLoginController))
router.post('/login', catchAsync(loginAuthController))
router.get('/logout', catchAsync(destroySession))

module.exports = router
