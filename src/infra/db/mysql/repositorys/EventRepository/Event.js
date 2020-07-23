const Event = require('../../models/Event.model')

class EventRepository {
  async create (event) {
    return Event.create(event)
  }
} 

module.exports = { EventRepository }
