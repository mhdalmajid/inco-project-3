/* eslint-disable global-require */
/*
 * liveReload function :
 * for **only** development environment purpose
 * I setup livereload and connect-livereload
 * to reload(refresh) the browser
 * it will watch static files for changes.
 * for js files I use nodemon package to restart the server.
 *
 */
const liveReload = (app, server, path, livereload) => {
  const livereloadServer = livereload.createServer({
    // debug: true,
    exts: ['pug', 'html', 'css', 'png', 'gif', 'jpg'],
  })
  livereloadServer.watch(path.resolve(__dirname, '../../public'))
  livereloadServer.server.once('connection', () => {
    setTimeout(() => {
      livereloadServer.refresh('/')
    }, 100)
  })
}
module.exports = liveReload
