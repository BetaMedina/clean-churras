const Event = require('../../models/Event.model')

class EventRepository {
  async create (event) {
    return Event.create(event)
  }

  async list () {
    return Event.findAll()
  }
} 

module.exports = { EventRepository }
