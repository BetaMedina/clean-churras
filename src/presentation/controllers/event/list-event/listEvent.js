const { success, serverError } = require('../../../helpers/httpHelper')

class ListEventController {
  constructor (ListEventUseCase) {
    this.listEventUseCase = ListEventUseCase
  }

  async handle (httpRequest) {
    try {
      const eventResponse = await this.listEventUseCase.listEvent()
      return success(eventResponse)
    } catch (err) {
      console.error(err)
      return serverError()
    }
  }
}

module.exports = { ListEventController }
