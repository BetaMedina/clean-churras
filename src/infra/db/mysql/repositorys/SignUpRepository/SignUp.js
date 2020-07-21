const Users = require('../../models/User.model')

class SignUpRepository {
  async create (account) {
    const newAccount = await Users.create(account)
    return newAccount
  }
} 

module.exports = { SignUpRepository }
