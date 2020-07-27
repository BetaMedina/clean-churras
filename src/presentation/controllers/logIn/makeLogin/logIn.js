const { LoginValidation } = require('../../../../validation/index')
const { MissingParamError, UnauthorizedError } = require('../../../errors')
const { serverError, unauthorizedError } = require('../../../helpers/httpHelper')
const { badRequest, success } = require('../../../helpers/httpHelper')

class LoginController {
  constructor (AuthUseCase) {
    this.authUseCase = AuthUseCase
  }
  
  async handle (httpRequest) {
    const error = await LoginValidation(httpRequest.body)
    if (error) {
      return badRequest(new MissingParamError(error))
    } 
    try {
      const { password, email } = httpRequest.body
      const userAuthToken = await this.authUseCase.handle(password, email)
      return success({
        access_token: userAuthToken
      })
    } catch (err) {
      console.error(err)
      if (err instanceof UnauthorizedError) {
        return unauthorizedError()
      }
      return serverError()
    }
  }
}

module.exports = { LoginController }
