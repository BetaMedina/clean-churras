const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const { ENUM } = require('../../infra/criptography/jwt/enum/jwtEnum') 

const authMiddleware = async (req, res, next) => {
  const auth = req.headers.authorization
  if (!auth) return res.status(400).json({ error: 'Token is not provided' })
  try {
    const verify = await promisify(jwt.verify)(auth, ENUM.SALTKEY)
    req.userID = verify.id
    return next()
  } catch (err) {
    return res.status(401).json({ err: 'invalid token', type: 'INVALID_TOKEN' })
  }
}
module.exports = { authMiddleware }
