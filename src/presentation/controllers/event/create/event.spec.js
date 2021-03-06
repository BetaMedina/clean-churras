const { MissingParamError, ServerError } = require('../../../errors')
const { EventController } = require('./event')

const makeSut = () => {
  class EventUseCaseSut {
    async createNewEvent (payload) {
      return { id: 'any_valid_id', ...payload }
    }
  }
  const eventUseCaseSut = new EventUseCaseSut()
  const sutEvent = new EventController(eventUseCaseSut)
  return {
    sutEvent,
    eventUseCaseSut
  }
}
let sut
let eventUseSut
let date
describe('Event - Controller', () => {
  beforeEach(() => {
    const { sutEvent, eventUseCaseSut } = makeSut()
    sut = sutEvent
    eventUseSut = eventUseCaseSut
    date = new Date()
  })
  it("Should be expected to return error if event name don't be send ", async () => {
    const payload = {
      body: {
        name: '',
        description: 'validDescription',
        date,
        obs: 'validObs',
        suggestedValue: '99.9'

      }
    }
    const httpResponse = await sut.handle(payload)
    await expect(httpResponse.statusCode).toBe(400)
    await expect(httpResponse.body).toBeInstanceOf(MissingParamError) 
  })
  
  it("Should be expected to return error if event data don't be send ", async () => {
    const payload = {
      body: {

        name: 'validName',
        description: 'validDescription',
        date: '',
        obs: 'validObs',
        suggestedValue: '99.9'

      }
    }
    const httpResponse = await sut.handle(payload)
    await expect(httpResponse.statusCode).toBe(400)
    await expect(httpResponse.body).toBeInstanceOf(MissingParamError) 
  })
  
  it('Should be return a server error', async () => {
    const payload = {
      body: {
        name: 'validName',
        description: 'validDescription',
        date,
        obs: 'validObs',
        suggestedValue: '99.9'
      }
    }
    jest.spyOn(eventUseSut, 'createNewEvent').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const httpResponse = await sut.handle(payload)
    await expect(httpResponse.statusCode).toBe(500)
    await expect(httpResponse.body).toBeInstanceOf(ServerError)
  })
  it('Should be expect to return a new event Object', async () => {
    const payload = {
      body: {
        name: 'validName',
        description: 'validDescription',
        date,
        obs: 'validObs',
        suggestedValue: '99.9',
        numberPeople: '9',
        withDrink: false
      }
    }
    const httpResponse = await sut.handle(payload)
    await expect(httpResponse.statusCode).toBe(200)
    await expect(httpResponse.body).toEqual({
      id: 'any_valid_id',
      name: 'validName',
      description: 'validDescription',
      date,
      obs: 'validObs',
      suggested_value: '99.9',
      number_people: '9',
      with_drink: false

    })
  })
})
