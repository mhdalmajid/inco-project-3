const express = require('express')
const logger = require('morgan')
const path = require('path')
const createError = require('http-errors')
const ConnectLivereload = require('connect-livereload')
const errorHandler = require('./utils/errorHandler')
const router = require('./routes/router')

const { PORT } = require('./config/config.js')

const app = express()
// development purpose only,
if (process.env.NODE_ENV === 'development') {
  app.use(ConnectLivereload())
  app.use(logger('dev'))
}
app.set('port', PORT)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use(errorHandler)
module.exports = app
