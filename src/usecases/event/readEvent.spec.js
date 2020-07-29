const { EventRead } = require('./readEvent')
const makeSut = () => {
  class EventRepository {
    read (id) {
      return { id }
    }
  }
  
  const eventRepoSut = new EventRepository()
  const eventSut = new EventRead(eventRepoSut)
  
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
    jest.spyOn(eventRepository, 'read').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    expect(sut.readEvent('any_valid_id')).rejects.toThrow()
  })
  it('Should be receveid a new Event', async () => {
    const response = await sut.readEvent('any_valid_id')
    expect(response).toEqual({
      id: 'any_valid_id'
    })
  })
})
