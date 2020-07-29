const { MissingParamError, ServerError } = require('../../../errors')
const { ReadEventController } = require('./read-event')

const makeSut = () => {
  class EventUseCaseSut {
    async readEvent (id) {
      return { id }
    }
  }
  const eventUseCaseSut = new EventUseCaseSut()
  const sutEvent = new ReadEventController(eventUseCaseSut)
  return {
    sutEvent,
    eventUseCaseSut
  }
}
let sut
let eventUseSut

describe('Event - Controller', () => {
  beforeEach(() => {
    const { sutEvent, eventUseCaseSut } = makeSut()
    sut = sutEvent
    eventUseSut = eventUseCaseSut
  })
  const payload = {
    params: {
      id: 'any_valid_id'
    }
  }
  
  it('Should be return a server error', async () => {
    jest.spyOn(eventUseSut, 'readEvent').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const httpResponse = await sut.handle(payload)
    await expect(httpResponse.statusCode).toBe(500)
    await expect(httpResponse.body).toBeInstanceOf(ServerError)
  })
  it('Should be expect to return a new event Object', async () => {
    const payload = {
      params: {
        id: 'any_valid_id'
      }
    }
    const httpResponse = await sut.handle(payload)
    await expect(httpResponse.statusCode).toBe(200)
    await expect(httpResponse.body).toEqual({
      id: 'any_valid_id'
    })
  })
})
