const bcrypt = require('bcrypt')

class BcryptAdapter {
  constructor (salt) {
    this.salt = salt
  }

  async encrypt (value) {
    return bcrypt.hash(value, this.salt)
  }
}

module.exports = { BcryptAdapter }
