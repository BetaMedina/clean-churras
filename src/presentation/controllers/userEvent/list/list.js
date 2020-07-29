const { success, serverError } = require('../../../helpers/httpHelper')
const { UserEvent } = require('../../../../domain/userEvent')

class ListUserEventController {
  constructor (UserEventListUseCase) {
    this.userEventListUseCase = UserEventListUseCase
  }

  async handle (httpRequest) {
    try {
      const { id } = httpRequest.params
      const userEventResponse = await this.userEventListUseCase.listUserEvent(id)
      return success(userEventResponse)
    } catch (err) {
      console.error(err)
      return serverError()
    }
  }
}

module.exports = { ListUserEventController }
