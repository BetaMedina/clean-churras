const User = require('../../models/User.model')

class AccountRepository {
  async findUserByMail (email) {
    return User.findOne({
      where: {
        email
      } 
    })
  }
} 

module.exports = { AccountRepository }
