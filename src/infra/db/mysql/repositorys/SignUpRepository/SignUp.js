const User = require('../../models/User.model')

class SignUpRepository {
  async create (account) {
    const newAccount = await User.create({ ...account })
    return newAccount
  }
} 

module.exports = { SignUpRepository }
