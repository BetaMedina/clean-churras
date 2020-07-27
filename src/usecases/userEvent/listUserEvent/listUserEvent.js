class UserEventList {
  constructor (UserEventRepository) {
    this.userEventRepository = UserEventRepository
  }

  async listUserEvent () {
    return this.userEventRepository.list()
  }
}
module.exports = { UserEventList }
