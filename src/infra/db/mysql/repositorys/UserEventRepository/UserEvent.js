const UserEvent = require('../../models/UserEvent.model')
const User = require('../../models/User.model')
const Event = require('../../models/Event.model')

class UserEventRepository {
  async list (idEvent) {
    return Event.findOne({
      include: { model: User, as: 'users', attributes: ['id', 'name', 'email'] },
      where: {
        id: idEvent
      }
    })
  }

  async create (userEvent) {
    return UserEvent.create(userEvent)
  }

  async destroy ({ idUsers, idEvent }) {
    return UserEvent.destroy({
      where: {
        id_user: idUsers,
        id_event: idEvent
      } 
    })
  }
} 

module.exports = { UserEventRepository }
