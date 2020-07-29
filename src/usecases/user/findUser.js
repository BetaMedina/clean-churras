class UserFind {
  constructor (UserRepository) {
    this.userRepository = UserRepository
  }

  async findUser (name) {
    return this.userRepository.find(name)
  }
}
module.exports = { UserFind }
