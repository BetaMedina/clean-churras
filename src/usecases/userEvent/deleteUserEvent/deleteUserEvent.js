class DeleteUserEvent {
  constructor (UserEventRepository) {
    this.userEventRepository = UserEventRepository
  }

  async deleteUserOnEvent ({ idUsers, idEvent }) {
    return this.userEventRepository.destroy({ idUsers, idEvent })
  }
}
module.exports = { DeleteUserEvent }
