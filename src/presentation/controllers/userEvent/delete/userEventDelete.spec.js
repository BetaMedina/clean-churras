const { ServerError } = require('../../../errors')
const { DeleteUserEventController } = require('./userEventDelete')

const makeSut = () => {
  class UserEventDeleteUseCaseSut {
    async deleteUserOnEvent (payload) {
      return true
    }
  }
  const userEventDeleteUseCaseSut = new UserEventDeleteUseCaseSut()

  const sutUserEvent = new DeleteUserEventController(userEventDeleteUseCaseSut)
  return {
    sutUserEvent,
    userEventDeleteUseCaseSut
  }
}
let sut
let userEventUseSut
describe('UserEvent - Controller', () => {
  beforeEach(() => {
    const { sutUserEvent, userEventDeleteUseCaseSut } = makeSut()
    sut = sutUserEvent
    userEventUseSut = userEventDeleteUseCaseSut
  })
  
  it('Should be return a server error', async () => {
    const payload = {
      params: {
        idEvent: 1,
        idUser: 2
      }
    }
    jest.spyOn(userEventUseSut, 'deleteUserOnEvent').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const httpResponse = await sut.handle(payload)
    await expect(httpResponse.statusCode).toBe(500)
    await expect(httpResponse.body).toBeInstanceOf(ServerError)
  })
  it('Should be expect to return a new event Object', async () => {
    const payload = {
      params: {
        idEvent: 1,
        idUser: 2
      }
    }
    const httpResponse = await sut.handle(payload)
    await expect(httpResponse.statusCode).toBe(200)
    await expect(httpResponse.body).toEqual({ msg: 'User event deleted successfull ' })
  })
})
