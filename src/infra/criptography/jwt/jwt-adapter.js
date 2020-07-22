const { ENUM } = require('./enum/jwtEnum')

const jwt = require('jsonwebtoken')

class JwtAdapter {
  constructor () {
    this.secret = ENUM.SALTKEY
    this.expires = ENUM.EXPIRES
  }

  async encrypt (id) {
    return jwt.sign({ id: id }, this.secret, { expiresIn: this.expires })
  }

  async decrypt (jwtToken) {
    return jwt.verify(jwtToken, this.secret)
  }
}

module.exports = { JwtAdapter }
