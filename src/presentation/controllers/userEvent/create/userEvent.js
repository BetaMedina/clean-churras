const { badRequest, success, serverError } = require('../../../helpers/httpHelper')
const { MissingParamError } = require('../../../errors')
const { UserEventValidation } = require('../../../../validation')
const { UserEvent } = require('../../../../domain/userEvent')

class UserEventController {
  constructor (UserEventUseCase) {
    this.userEventUseCase = UserEventUseCase
  }

  async handle (httpRequest) {
    const error = await UserEventValidation(httpRequest.body)
    if (error) {
      return badRequest(new MissingParamError(error))
    }
    
    const { idUser, idEvent, paymentValue } = httpRequest.body
    const userEvent = new UserEvent({ idUser, idEvent, paymentValue })

    try {
      const userEventResponse = await this.userEventUseCase.createNewUserEvent(userEvent)
      return success(userEventResponse)
    } catch (err) {
      console.error(err)
      return serverError()
    }
  }
}

module.exports = { UserEventController }
