const { SignUpController } = require('../../presentation/controllers/signUp/signUp')
const { SignUp } = require('../../usecases/signUp')
const { SignUpRepository } = require('../../infra/db/mysql/repositorys/SignUpRepository/SignUp')
const { BcryptAdapter } = require('../../infra/criptography/bcrypt-adapter')

const makeSignUpController = () => {
  const signUpRepository = new SignUpRepository()
  const bcryptAdapter = new BcryptAdapter(12)
  const signUp = new SignUp(signUpRepository, bcryptAdapter)
  return new SignUpController(signUp)
}
module.exports = { makeSignUpController }
