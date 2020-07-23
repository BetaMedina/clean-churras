const { UserEventController } = require('../../presentation/controllers/userEvent/userEvent')
const { CreateUserEvent } = require('../../usecases/userEvent/createUserEvent')
const { DeleteUserEvent } = require('../../usecases/userEvent/deleteUserEvent')
const { UserEventRepository } = require('../../infra/db/mysql/repositorys/UserEventRepository/UserEvent')

const makeUserEventController = () => {
  const userEventRepository = new UserEventRepository()
  const createUserEvent = new CreateUserEvent(userEventRepository)
  const deleteUserEvent = new DeleteUserEvent(userEventRepository)
  
  return new UserEventController(createUserEvent, deleteUserEvent)
}
module.exports = { makeUserEventController }
