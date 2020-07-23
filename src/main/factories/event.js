const { EventController } = require('../../presentation/controllers/event')
const { Event } = require('../../usecases/event/event')
const { EventRepository } = require('../../infra/db/mysql/repositorys/EventRepository/Event')

const makeEventController = () => {
  const eventRepository = new EventRepository()

  const eventUseCase = new Event(eventRepository)
  
  return new EventController(eventUseCase)
}
module.exports = { makeEventController }
