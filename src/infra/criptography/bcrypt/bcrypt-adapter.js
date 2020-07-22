const { ENUM } = require('./enum/bcryptEnum')
const bcrypt = require('bcrypt')

class BcryptAdapter {
  constructor () {
    this.salt = ENUM.SALT
  }

  async encrypt (value) {
    return bcrypt.hash(value, this.salt)
  }

  async compare (value, hash) {
    return bcrypt.hash(value, hash)
  }
}

module.exports = { BcryptAdapter }
