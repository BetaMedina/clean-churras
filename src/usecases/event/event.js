class Event {
  constructor (EventRepository) {
    this.eventRepository = EventRepository
  }

  async createNewEvent (Event) {
    return this.eventRepository.create(Event)
  }
}
module.exports = { Event }
