/* eslint-disable no-undef */
const dotenv = require('dotenv')
const uuid = require('uuid')

dotenv.config()
const mysqlConfig = {
  host: process.env.DBHHOST || 'localhost',
  user: process.env.DBUSER || 'root',
  password: process.env.DBPASS || 'admin',
  database: process.env.DBNAME || 'db',
}

const SERVERPORT = process.env.PORT || 3000

const SESSIONCONFIG = {
  genid: (req) => uuid.v4(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}
module.exports = {
  mysqlConfig,
  SERVERPORT,
  SESSIONCONFIG,
}
