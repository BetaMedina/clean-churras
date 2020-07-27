const { LoginController } = require('../../../presentation/controllers/logIn')
const { Auth } = require('../../../usecases/auth/auth')

const { AccountRepository } = require('../../../infra/db/mysql/repositorys/AccountRepository/Account')

const { BcryptAdapter } = require('../../../infra/criptography/bcrypt/bcrypt-adapter')
const { JwtAdapter } = require('../../../infra/criptography/jwt/jwt-adapter')

const makeLoginController = () => {
  const jwtAdapter = new JwtAdapter()
  const bcryptAdapter = new BcryptAdapter()

  const accountRepository = new AccountRepository()
  
  const authUseCase = new Auth(accountRepository, bcryptAdapter, jwtAdapter)
  return new LoginController(authUseCase)
}
module.exports = { makeLoginController }
