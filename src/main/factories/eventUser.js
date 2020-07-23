const { UserEventController } = require('../../presentation/controllers/userEvent')
const { CreateUserEvent } = require('../../usecases/userEvent')
const { UserEventRepository } = require('../../infra/db/mysql/repositorys/UserEventRepository/UserEvent')

const makeUserEventController = () => {
  const userEventRepository = new UserEventRepository()
  const createUserEvent = new CreateUserEvent(userEventRepository)
  
  return new UserEventController(createUserEvent)
}
module.exports = { makeUserEventController }
