const { ListUserEventController } = require('../../../presentation/controllers/userEvent')
const { UserEventList } = require('../../../usecases/userEvent')
const { UserEventRepository } = require('../../../infra/db/mysql/repositorys/UserEventRepository/UserEvent')

const makeListUserEventController = () => {
  const userEventRepository = new UserEventRepository()
  const userEventListUseCase = new UserEventList(userEventRepository)
  
  return new ListUserEventController(userEventListUseCase)
}
module.exports = { makeListUserEventController }
