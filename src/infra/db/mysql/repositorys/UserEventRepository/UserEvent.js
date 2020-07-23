const UserEvent = require('../../models/UserEvent.model')
const User = require('../../models/User.model')
const Event = require('../../models/Event.model')

class UserEventRepository {
  async read (idEvent) {
    return UserEvent.findAll({
      include: [{
        model: Event,
        where: {
          id_event: idEvent
        }
      }, { model: User, attributes: ['name', 'email'] }]
    })
  }

  async create (userEvent) {
    return UserEvent.create(userEvent)
  }

  async destroy ({ idUser, idEvent }) {
    return UserEvent.destroy({
      where: {
        id_user: idUser,
        id_event: idEvent
      } 
    })
  }
} 

module.exports = { UserEventRepository }
