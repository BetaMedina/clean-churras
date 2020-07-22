const { UnauthorizedError } = require('../../presentation/errors')

class Auth {
  constructor (AccountRepository, BcryptAdapter, JwtAdapter) {
    this.accountRepository = AccountRepository
    this.bcryptAdapter = BcryptAdapter
    this.jwtAdapter = JwtAdapter
  }

  async handle (password, email) {
    const user = await this.accountRepository.findUserByMail(email)
    if (!user) {
      throw new UnauthorizedError()      
    }
    if (!(await this.bcryptAdapter.compare(password, user.password))) { 
      throw new UnauthorizedError()      
    }
    return this.jwtAdapter.encrypt(user.id)
  }
}
module.exports = { Auth }
