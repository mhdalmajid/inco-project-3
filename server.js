const http = require('http')
const path = require('path')
const util = require('util')
const livereload = require('livereload')
let mysql = require('mysql')
const app = require('./src/app.js')
const onError = require('./src/helpers/serverOnError.js')
const serverOnListening = require('./src/helpers/serverOnListening.js')
const liveReloadInit = require('./src/helpers/livereload.js')
const { mysqlConfig } = require('./src/helpers/config/config')

let db = mysql.createConnection(mysqlConfig)

db.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`)
    return
  }
  const server = http.createServer(app)
  // development purpose only
  liveReloadInit(app, server, path, livereload) // development purpose only

  global.query = util.promisify(db.query.bind(db)) // binding necessary as the mysql module uses the context

  server.on('error', (er) => {
    onError(er, app)
  })
  server.on('listening', serverOnListening(server))
  server.listen(app.get('port'))
  console.log(`DB connected `)
})
