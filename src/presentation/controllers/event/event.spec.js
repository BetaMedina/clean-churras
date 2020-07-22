const { MissingParamError, ServerError } = require('../../errors')
const { EventController } = require('./event')

const makeSut = () => {
  class EventUseCaseSut {
    async handle (payload) {
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
        obs: 'validObs'
      }
    }
    const httpResponse = await sut.handle(payload)
    await expect(httpResponse.statusCode).toBe(400)
    await expect(httpResponse.body).toBeInstanceOf(MissingParamError) 
  })
  it("Should be expected to return error if event description don't be send ", async () => {
    const payload = {
      body: {
        name: 'validName',
        description: '',
        date,
        obs: 'validObs'
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
        obs: 'validObs'
      }
    }
    const httpResponse = await sut.handle(payload)
    await expect(httpResponse.statusCode).toBe(400)
    await expect(httpResponse.body).toBeInstanceOf(MissingParamError) 
  })
  it("Should be expected to return error if event obs don't be send ", async () => {
    const payload = {
      body: {
        name: 'validName',
        description: 'validDescription',
        date,
        obs: ''
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
        obs: 'validObs'
      }
    }
    jest.spyOn(eventUseSut, 'handle').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
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
        obs: 'validObs'
      }
    }
    const httpResponse = await sut.handle(payload)
    await expect(httpResponse.statusCode).toBe(200)
    await expect(httpResponse.body).toEqual({
      id: 'any_valid_id',
      name: 'validName',
      description: 'validDescription',
      date,
      obs: 'validObs'
    })
  })
})
