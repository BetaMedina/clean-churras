const { success, serverError } = require('../../../helpers/httpHelper')
const { UserEvent } = require('../../../../domain/userEvent')

class DeleteUserEventController {
  constructor (UserEventDeleteUseCase) {
    this.userDeleteEventUseCase = UserEventDeleteUseCase
  }

  async handle (httpRequest) {
    const { idUser, idEvent } = httpRequest.params
    const userEvent = new UserEvent({ idUser, idEvent })
  
    try {
      await this.userDeleteEventUseCase.deleteUserOnEvent(userEvent)
      return success({ msg: 'User event deleted successfull ' })
    } catch (err) {
      console.error(err)
      return serverError()
    }
  }
}

module.exports = { DeleteUserEventController }
