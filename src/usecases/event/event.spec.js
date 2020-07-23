const { Event } = require('./event')
const makeSut = () => {
  class EventRepository {
    create (payload) {
      return { id: 'any_valid_id', ...payload }
    }
  }
  
  const eventRepoSut = new EventRepository()
  const eventSut = new Event(eventRepoSut)
  
  return {
    eventRepoSut,
    eventSut
  }
}

let sut
let eventRepository
let date
describe('Event - Test', () => {
  beforeEach(() => {
    const { eventRepoSut, eventSut } = makeSut()
    sut = eventSut
    eventRepository = eventRepoSut
    date = new Date()
  })

  it('Should throw if Repository throws', async () => {
    const payload = {
      body: {
        name: 'validName',
        description: 'validDescription',
        date,
        obs: 'validObs',
        suggestedValue: '99.9'
      }
    }
    jest.spyOn(eventRepository, 'create').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    expect(sut.createNewEvent(payload.body)).rejects.toThrow()
  })
  it('Should be receveid a new Event', async () => {
    const payload = {
      body: {
        name: 'validName',
        description: 'validDescription',
        date,
        obs: 'validObs',
        suggestedValue: '99.9'
      }
    }
    const response = await sut.createNewEvent(payload.body)
    expect(response).toEqual({
      id: 'any_valid_id',
      name: 'validName',
      description: 'validDescription',
      date,
      obs: 'validObs',
      suggestedValue: '99.9'
    })
  })
})
