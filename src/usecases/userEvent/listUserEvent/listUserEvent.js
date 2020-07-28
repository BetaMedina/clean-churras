class UserEventList {
  constructor (UserEventRepository) {
    this.userEventRepository = UserEventRepository
  }

  async listUserEvent (eventId) {
    return this.userEventRepository.list(eventId)
  }
}
module.exports = { UserEventList }
