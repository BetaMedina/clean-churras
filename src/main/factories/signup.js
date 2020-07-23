const { SignUpController } = require('../../presentation/controllers/signUp')
const { SignUp } = require('../../usecases/signUp/signUp')
const { SignUpRepository } = require('../../infra/db/mysql/repositorys/SignUpRepository/SignUp')
const { BcryptAdapter } = require('../../infra/criptography/bcrypt/bcrypt-adapter')

const makeSignUpController = () => {
  const signUpRepository = new SignUpRepository()
  const bcryptAdapter = new BcryptAdapter()
  const signUp = new SignUp(signUpRepository, bcryptAdapter)
  return new SignUpController(signUp)
}
module.exports = { makeSignUpController }
