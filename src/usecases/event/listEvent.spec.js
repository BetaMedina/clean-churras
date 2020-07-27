const { EventList } = require('./listEvent')
const makeSut = () => {
  class EventRepository {
    list () {
      return { id: 'any_valid_id' }
    }
  }
  
  const eventRepoSut = new EventRepository()
  const eventSut = new EventList(eventRepoSut)
  
  return {
    eventRepoSut,
    eventSut
  }
}

let sut
let eventRepository
describe('Event - Test', () => {
  beforeEach(() => {
    const { eventRepoSut, eventSut } = makeSut()
    sut = eventSut
    eventRepository = eventRepoSut
  })

  it('Should throw if Repository throws', async () => {
    jest.spyOn(eventRepository, 'list').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    expect(sut.listEvent()).rejects.toThrow()
  })
  it('Should be receveid a new Event', async () => {
    const response = await sut.listEvent()
    expect(response).toEqual({
      id: 'any_valid_id'
    })
  })
})
