const { success, serverError } = require('../../../helpers/httpHelper')

class FindUserController {
  constructor (ListEventUseCase) {
    this.findUserUseCase = ListEventUseCase
  }

  async handle (httpRequest) {
    try {
      const { name } = httpRequest.body
      const eventResponse = await this.findUserUseCase.findUser(name)
      return success(eventResponse)
    } catch (err) {
      console.error(err)
      return serverError()
    }
  }
}

module.exports = { FindUserController }
