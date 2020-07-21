class SignUp {
  constructor (SignUpRepository, BcryptAdapter) {
    this.signUpRepository = SignUpRepository
    this.bcryptAdapter = BcryptAdapter
  }

  async createNewSignUp (User) {
    const cryptedPassword = await this.bcryptAdapter.encrypt(User.password)
    return this.signUpRepository.create({ ...User, password: cryptedPassword })
  }
}
module.exports = { SignUp }
