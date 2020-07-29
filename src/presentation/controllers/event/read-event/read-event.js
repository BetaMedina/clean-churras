const { success, serverError } = require('../../../helpers/httpHelper')

class ReadEventController {
  constructor (ListEventUseCase) {
    this.readEventUseCase = ListEventUseCase
  }

  async handle (httpRequest) {
    try {
      const { id } = httpRequest.params
      const eventResponse = await this.readEventUseCase.readEvent(id)
      return success(eventResponse)
    } catch (err) {
      console.error(err)
      return serverError()
    }
  }
}

module.exports = { ReadEventController }
