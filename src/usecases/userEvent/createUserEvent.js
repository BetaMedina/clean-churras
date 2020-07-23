class CreateUserEvent {
  constructor (UserEventRepository) {
    this.userEventRepository = UserEventRepository
  }

  async createNewUserEvent (Event) {
    return this.userEventRepository.create(Event)
  }
}
module.exports = { CreateUserEvent }
