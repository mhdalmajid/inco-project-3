function onError(error, app) {
  if (error.syscall !== 'listen') {
    throw error
  }

  let bind =
    typeof port === 'string'
      ? `Pipe ${app.get('port')}`
      : `Port ${app.get('port')}`

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`)
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`)
      process.exit(1)
      break
    default:
      throw error
  }
}

module.exports = onError
