const jwt = require('jsonwebtoken')
const { promisify } = require('util')
const { ENUM } = require('../../infra/criptography/jwt/enum/jwtEnum') 

const authMiddleware = async (req, res, next) => {
  const auth = req.headers.access_token
  if (!auth) return res.status(400).json({ error: 'Token is not provided' })

  const [header, token] = auth.split(' ')
  if (header !== 'bearer') {
    return res.status(400).json({ err: 'invalid token' })
  }
  try {
    const verify = await promisify(jwt.verify)(token, ENUM.SALTKEY)
    req.userID = verify.id
    return next()
  } catch (err) {
    return res.status(400).json({ err: 'invalid token' })
  }
}
module.exports = { authMiddleware }
