class DeleteUserEvent {
  constructor (UserEventRepository) {
    this.userEventRepository = UserEventRepository
  }

  async deleteUserOnEvent ({ idUser, idEvent }) {
    return this.userEventRepository.destroy({ idUser, idEvent })
  }
}
module.exports = { DeleteUserEvent }
