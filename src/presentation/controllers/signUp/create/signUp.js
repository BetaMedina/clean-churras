const { badRequest, success, serverError } = require('../../../helpers/httpHelper')
const { MissingParamError } = require('../../../errors')
const { SignUpValidation } = require('../../../../validation/yup/signInValidation')
const { User } = require('../../../../domain/user')

class SignUpController {
  constructor (SignUpUseCase) {
    this.signUpUseCase = SignUpUseCase
  }

  async handle (httpRequest) {
    try {
      const error = await SignUpValidation(httpRequest.body)
      if (error) {
        return badRequest(new MissingParamError(error))
      }
      const { name, email, password } = httpRequest.body
      const user = new User(email, name, password)
      
      const registerSignUp = await this.signUpUseCase.createNewSignUp(user)
      return success(registerSignUp) 
    } catch (err) {
      console.error(err)
      return serverError()
    }
  }
}

module.exports = { SignUpController }
