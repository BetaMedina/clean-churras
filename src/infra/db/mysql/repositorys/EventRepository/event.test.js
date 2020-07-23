
const Event = require('../../models/Event.model')
const { EventRepository } = require('./Event')

const helper = require('../../helpers/mysql.helper')

require('../../models')

const makeSut = () => {
  return new EventRepository()
}
let sut

describe('Event MYSQL Repository', () => {
  afterAll(async () => {
    helper.mysqlTruncate(Event)
  })

  beforeEach(async () => {
    sut = makeSut()
  })

  it('Should return an account on success', async () => {
    const date = new Date()

    const event = await sut.create({
      name: 'validName',
      description: 'validDescription',
      date,
      obs: 'validObs',
      suggested_value: '99.9'
    })

    expect(event).toBeTruthy()
    expect(event.id).toBeTruthy()
    expect(event.name).toBe('validName')
    expect(event.description).toBe('validDescription')
    expect(event.date).toBe(date)
    expect(event.obs).toBe('validObs')
    expect(event.suggested_value).toBe('99.9')
  })
})
