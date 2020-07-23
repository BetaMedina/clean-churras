const { MissingParamError, ServerError } = require('../../errors')
const { UserEventController } = require('./userEvent')

const makeSut = () => {
  class UserEventUseCaseSut {
    async createNewUserEvent (payload) {
      return { id: 'any_valid_id', ...payload }
    }
  }
  class UserEventDeleteUseCaseSut {
    async deleteUserOnEvent (payload) {
      return true
    }
  }
  const userEventUseCaseSut = new UserEventUseCaseSut()
  const userEventDeleteUseCaseSut = new UserEventDeleteUseCaseSut()

  const sutUserEvent = new UserEventController(userEventUseCaseSut, userEventDeleteUseCaseSut)
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
    const httpResponse = await sut.delete(payload)
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
    const httpResponse = await sut.delete(payload)
    await expect(httpResponse.statusCode).toBe(200)
    await expect(httpResponse.body).toEqual({ msg: 'User event deleted successfull ' })
  })
})
