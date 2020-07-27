class EventList {
  constructor (EventRepository) {
    this.eventRepository = EventRepository
  }

  async listEvent () {
    return this.eventRepository.list()
  }
}
module.exports = { EventList }
