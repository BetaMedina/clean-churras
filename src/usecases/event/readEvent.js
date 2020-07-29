class EventRead {
  constructor (EventRepository) {
    this.eventRepository = EventRepository
  }

  async readEvent (event) {
    return this.eventRepository.read(event)
  }
}
module.exports = { EventRead }
