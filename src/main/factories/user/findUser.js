const { FindUserController } = require('../../../presentation/controllers/user')
const { UserFind } = require('../../../usecases/user/findUser')
const { UserRepository } = require('../../../infra/db/mysql/repositorys/UserRepository/UserRepository')

const makeUserController = () => {
  const userRepository = new UserRepository()

  const userUseCase = new UserFind(userRepository)
  
  return new FindUserController(userUseCase)
}
module.exports = { makeUserController }
