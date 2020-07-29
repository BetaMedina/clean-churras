const { MissingParamError, ServerError } = require('../../../errors')
const { FindUserController } = require('./findUser')

const makeSut = () => {
  class EventUseCaseSut {
    async findUser () {
      return { id: 'any_valid_id' }
    }
  }
  const eventUseCaseSut = new EventUseCaseSut()
  const sutEvent = new FindUserController(eventUseCaseSut)
  return {
    sutEvent,
    eventUseCaseSut
  }
}
let sut
let eventUseSut
const paramsPayload = {
  body: {
    name: 'teste'
  }
}

describe('User - Controller', () => {
  beforeEach(() => {
    const { sutEvent, eventUseCaseSut } = makeSut()
    sut = sutEvent
    eventUseSut = eventUseCaseSut
  })
  
  it('Should be return a server error', async () => {
    jest.spyOn(eventUseSut, 'findUser').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const httpResponse = await sut.handle(paramsPayload)
    await expect(httpResponse.statusCode).toBe(500)
    await expect(httpResponse.body).toBeInstanceOf(ServerError)
  })
  it('Should be expect to return a new event Object', async () => {
    const httpResponse = await sut.handle(paramsPayload)
    await expect(httpResponse.statusCode).toBe(200)
    await expect(httpResponse.body).toEqual({
      id: 'any_valid_id'
    })
  })
})
