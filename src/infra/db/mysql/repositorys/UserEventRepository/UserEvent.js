const UserEvent = require('../../models/UserEvent.model')
const User = require('../../models/User.model')
const Event = require('../../models/Event.model')

class UserEventRepository {
  async list (idEvent) {
    console.log(idEvent)
    return Event.findOne({
      include: { model: User, as: 'users', attributes: ['name', 'email'] },
      where: {
        id: idEvent
      }
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
