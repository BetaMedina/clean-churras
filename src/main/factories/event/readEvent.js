const { ReadEventController } = require('../../../presentation/controllers/event/index')
const { EventRead } = require('../../../usecases/event/readEvent')
const { EventRepository } = require('../../../infra/db/mysql/repositorys/EventRepository/Event')

const makeReadEventController = () => {
  const eventRepository = new EventRepository()

  const eventUseCase = new EventRead(eventRepository)
  
  return new ReadEventController(eventUseCase)
}
module.exports = { makeReadEventController }
