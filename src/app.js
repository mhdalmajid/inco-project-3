const express = require('express')
const logger = require('morgan')
const path = require('path')
const createError = require('http-errors')
const ConnectLivereload = require('connect-livereload')
const exphbs = require('express-handlebars')
const session = require('express-session')

const router = require('./routes/router')

const { SERVERPORT, SESSIONCONFIG } = require('./helpers/config/config.js')

const app = express()
// development purpose only,
if (process.env.NODE_ENV === 'development') {
  app.use(ConnectLivereload())
  app.use(logger('dev'))
}

// Set up view engine
const hbs = exphbs.create({
  extname: '.hbs',
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', path.resolve(__dirname, 'views'))

app.set('port', SERVERPORT)
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session(SESSIONCONFIG))

app.use(router)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   let err = new Error('Not Found')
//   err.status = 404
//   next(err)
// })

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  console.log(err)
  // res.json(err)
  res.render('error', { error: err })
})
module.exports = app
