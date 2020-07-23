const { badRequest, success, serverError } = require('../../../helpers/httpHelper')
const { MissingParamError } = require('../../../errors')
const { EventValidation } = require('../../../../validation/yup/eventValidation')
const { Event } = require('../../../../domain/event')

class EventController {
  constructor (EventUseCase) {
    this.eventUseCase = EventUseCase
  }

  async handle (httpRequest) {
    const error = await EventValidation(httpRequest.body)
    if (error) {
      return badRequest(new MissingParamError(error))
    }
    
    const { name, description, date, obs, suggestedValue, withDrink } = httpRequest.body
    const event = new Event({ name, description, date, obs, suggestedValue, withDrink })

    try {
      const eventResponse = await this.eventUseCase.createNewEvent(event)
      return success(eventResponse)
    } catch (err) {
      console.error(err)
      return serverError()
    }
  }
}

module.exports = { EventController }
