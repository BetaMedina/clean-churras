class DeleteUserEvent {
  constructor (UserEventRepository) {
    this.userEventRepository = UserEventRepository
  }

  async deleteUserOnEvent ({ id_user: idUser, id_event: idEvent }) {
    return this.userEventRepository.destroy({ idUser, idEvent })
  }
}
module.exports = { DeleteUserEvent }
