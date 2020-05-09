/* eslint-disable no-undef */
const dotenv = require('dotenv')

dotenv.config()
const DatabaseOptions = {
  host: process.env.DBHHOST || 'localhost',
  user: process.env.DBUSER || 'root',
  password: process.env.DBPASS || 'admin',
  database: process.env.DBNAME || 'db',
}

const PORT = process.env.PORT || 3000

module.exports = {
  DatabaseOptions,
  PORT,
}
