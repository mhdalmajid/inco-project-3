const serverOnListening = (server) => {
  let addr = server.address()
  let bind =
    typeof addr === 'string' ? `pipe ${addr}` : `http://localhost:${addr.port}`
  console.log(`Server Listening on ${bind}`)
}

module.exports = serverOnListening
