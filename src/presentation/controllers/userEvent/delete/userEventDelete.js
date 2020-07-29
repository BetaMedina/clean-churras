const { success, serverError } = require('../../../helpers/httpHelper')
const { UserEvent } = require('../../../../domain/userEvent')

class DeleteUserEventController {
  constructor (UserEventDeleteUseCase) {
    this.userDeleteEventUseCase = UserEventDeleteUseCase
  }

  async handle (httpRequest) {
    const { idUsers, idEvent } = httpRequest.body
    try {
      await this.userDeleteEventUseCase.deleteUserOnEvent({ idUsers, idEvent })
      return success({ msg: 'User event deleted successfull ' })
    } catch (err) {
      console.error(err)
      return serverError()
    }
  }
}

module.exports = { DeleteUserEventController }
