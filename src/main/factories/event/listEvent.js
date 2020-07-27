const { ListEventController } = require('../../../presentation/controllers/event/index')
const { EventList } = require('../../../usecases/event/listEvent')
const { EventRepository } = require('../../../infra/db/mysql/repositorys/EventRepository/Event')

const makeListEventController = () => {
  const eventRepository = new EventRepository()

  const eventUseCase = new EventList(eventRepository)
  
  return new ListEventController(eventUseCase)
}
module.exports = { makeListEventController }
