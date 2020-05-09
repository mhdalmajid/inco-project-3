const http = require('http')
const path = require('path')

const livereload = require('livereload')

const app = require('./src/app.js')
const onError = require('./src/utils/serverOnError.js')
const liveReloadInit = require('./src/utils/livereload.js')

const server = http.createServer(app)
liveReloadInit(app, server, path, livereload) // development purpose only

server.on('error', (err) => {
  onError(err, app)
})
server.on('listening', () => {
  let addr = server.address()
  let bind =
    typeof addr === 'string' ? `pipe ${addr}` : `http://localhost:${addr.port}`
  console.log(`Server Listening on ${bind}`)
})
server.listen(app.get('port'))
