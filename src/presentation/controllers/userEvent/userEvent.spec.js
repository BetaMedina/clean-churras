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
    userEventUseCaseSut
  }
}
let sut
let userEventUseSut
describe('UserEvent - Controller', () => {
  beforeEach(() => {
    const { sutUserEvent, userEventUseCaseSut } = makeSut()
    sut = sutUserEvent
    userEventUseSut = userEventUseCaseSut
  })
  it("Should be expected to return error if id_event  don't be send ", async () => {
    const payload = {
      body: {
        idEvent: '',
        idUser: 2,
        paymentValue: '99.99'
      }
    }
    const httpResponse = await sut.handle(payload)
    await expect(httpResponse.statusCode).toBe(400)
    await expect(httpResponse.body).toBeInstanceOf(MissingParamError) 
  })
  
  it("Should be expected to return error if event data don't be send ", async () => {
    const payload = {
      body: {

        idEvent: 1,
        idUser: '',
        paymentValue: '99.99'

      }
    }
    const httpResponse = await sut.handle(payload)
    await expect(httpResponse.statusCode).toBe(400)
    await expect(httpResponse.body).toBeInstanceOf(MissingParamError) 
  })
  
  it('Should be return a server error', async () => {
    const payload = {
      body: {
        idEvent: 1,
        idUser: 2,
        paymentValue: '99.99'
      }
    }
    jest.spyOn(userEventUseSut, 'createNewUserEvent').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const httpResponse = await sut.handle(payload)
    await expect(httpResponse.statusCode).toBe(500)
    await expect(httpResponse.body).toBeInstanceOf(ServerError)
  })
  it('Should be expect to return a new event Object', async () => {
    const payload = {
      body: {
        idEvent: 1,
        idUser: 2,
        paymentValue: '99.99'
      }
    }
    const httpResponse = await sut.handle(payload)
    await expect(httpResponse.statusCode).toBe(200)
    await expect(httpResponse.body).toEqual({
      id: 'any_valid_id',
      id_event: 1,
      id_user: 2,
      payment_value: '99.99'
    })
  })
})
