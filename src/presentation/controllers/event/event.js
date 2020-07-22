const { badRequest, success, serverError } = require('../../helpers/httpHelper')
const { MissingParamError } = require('../../errors')
const { EventValidation } = require('../../../validation/yup/eventValidation')

class EventController {
  constructor (EventUseCase) {
    this.eventUseCase = EventUseCase
  }

  async handle (httpRequest) {
    const error = await EventValidation(httpRequest.body)
    if (error) {
      return badRequest(new MissingParamError(error))
    }
    try {
      const eventResponse = await this.eventUseCase.handle(httpRequest.body)
      return success(eventResponse)
    } catch (err) {
      console.error(err)
      return serverError()
    }
  }
}

module.exports = { EventController }
