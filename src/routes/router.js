let express = require('express')

let router = express.Router()

router.get('/new', (req, res) => {
  res.send('hello')
})
router.get('/', (req, res) => {
  res.send('main index')
})

module.exports = router
