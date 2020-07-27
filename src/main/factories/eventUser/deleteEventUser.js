const { DeleteUserEventController } = require('../../../presentation/controllers/userEvent')
const { DeleteUserEvent } = require('../../../usecases/userEvent')
const { UserEventRepository } = require('../../../infra/db/mysql/repositorys/UserEventRepository/UserEvent')

const makeDeleteUserEventController = () => {
  const userEventRepository = new UserEventRepository()
  const deleteUserEvent = new DeleteUserEvent(userEventRepository)
  
  return new DeleteUserEventController(deleteUserEvent)
}
module.exports = { makeDeleteUserEventController }
