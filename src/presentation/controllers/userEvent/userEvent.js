const { badRequest, success, serverError } = require('../../helpers/httpHelper')
const { MissingParamError } = require('../../errors')
const { UserEventValidation } = require('../../../validation')
const { UserEvent } = require('../../../domain/userEvent')

class UserEventController {
  constructor (UserEventUseCase, UserEventDeleteUseCase) {
    this.userEventUseCase = UserEventUseCase
    this.userDeleteEventUseCase = UserEventDeleteUseCase
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

  async delete (httpRequest) {
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

module.exports = { UserEventController }
