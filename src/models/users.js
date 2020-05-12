const createError = require('http-errors')
const { hashPassword, comparePassword } = require('../helpers/auth.js')

const getUserById = async (id) => {
  const result = await query(
    'SELECT id, firstname, lastname, email FROM users WHERE id = ?',
    [id]
  )

  if (result.length > 0) return result[0]

  throw createError('Unknown user.')
}

const getUserBy = async ({ table, value }) =>
  query('SELECT id, firstname, lastname, email FROM users WHERE table = ?', [
    value,
  ])

const createUser = async (userData) => {
  let { email, firstName, lastName, password, confirmPassword } = userData
  let trimStr = (str) => String(str).trim()

  if (!firstName || !lastName || !password || !email)
    throw createError(400, 'firstname,lastname,email,password required')
  firstName = trimStr(firstName)
  lastName = trimStr(lastName)
  email = trimStr(email)
  if (password !== confirmPassword)
    throw createError(400, 'Passwords do not match.')

  const result = await query('SELECT id FROM users WHERE email = ?', [email])

  if (result.length > 0) throw createError(409, 'user already exists')

  const hashedPassword = await hashPassword(password)

  return query(
    'INSERT INTO users(firstname, lastname, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, hashedPassword]
  )
}

const getUserByEmailAndPassword = async (email, password) => {
  if (!email || !password) throw createError(400, 'invalid email or password')
  const result = await query('SELECT * FROM users WHERE email = ?', email)

  if (!comparePassword(password, result.password))
    throw createError(401, 'invalid email or password!!!')

  return result
}

module.exports = { createUser, getUserByEmailAndPassword }
