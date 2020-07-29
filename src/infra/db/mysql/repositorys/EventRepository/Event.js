const Event = require('../../models/Event.model')

class EventRepository {
  async create (event) {
    return Event.create(event)
  }

  async list () {
    return Event.findAll()
  }

  async read (event) {
    return Event.findByPk(event)
  }
} 

module.exports = { EventRepository }
