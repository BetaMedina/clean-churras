const Event = require('../../models/Event.model')

class EventRepository {
  async create (event) {
    return Event.create(event)
  }

  async list () {
    return Event.findAll()
  }

  async read (event) {
    console.log(event)
    return Event.findByPk(event)
  }
} 

module.exports = { EventRepository }
