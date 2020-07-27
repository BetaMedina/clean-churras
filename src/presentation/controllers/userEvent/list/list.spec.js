const { ServerError } = require('../../../errors')
const { ListUserEventController } = require('./list')

const makeSut = () => {
  class EventUseCaseSut {
    async listUserEvent () {
      return { id: 'any_valid_id' }
    }
  }
  const eventUseCaseSut = new EventUseCaseSut()
  const sutEvent = new ListUserEventController(eventUseCaseSut)
  return {
    sutEvent,
    eventUseCaseSut
  }
}
let sut
let eventUseSut

describe('Event User - Controller', () => {
  beforeEach(() => {
    const { sutEvent, eventUseCaseSut } = makeSut()
    sut = sutEvent
    eventUseSut = eventUseCaseSut
  })
  
  it('Should be return a server error', async () => {
    jest.spyOn(eventUseSut, 'listUserEvent').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const httpResponse = await sut.handle()
    await expect(httpResponse.statusCode).toBe(500)
    await expect(httpResponse.body).toBeInstanceOf(ServerError)
  })
  it('Should be expect to return a new event Object', async () => {
    const httpResponse = await sut.handle()
    await expect(httpResponse.statusCode).toBe(200)
    await expect(httpResponse.body).toEqual({
      id: 'any_valid_id'
    })
  })
})
