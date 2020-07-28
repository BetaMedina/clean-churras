
const User = require('../../models/User.model')
const Event = require('../../models/Event.model')
const UserEvent = require('../../models/UserEvent.model')
const { UserEventRepository } = require('./UserEvent')
const helper = require('../../helpers/mysql.helper')
const mysqlHelper = require('../../helpers/mysql.helper')

require('../../models')

const makeSut = () => {
  return new UserEventRepository()
}
let sut
let user
let event

describe('UserEvent MYSQL Repository', () => {
  beforeEach(async () => {
    await mysqlHelper.mysqlTruncate(User)
    sut = makeSut()

    user = await User.create({
      name: 'validName',
      email: `${new Date().getTime}@mail.com`,
      password: 'hashPass'
    })
    event = await Event.create({
      name: 'validName',
      description: 'validDescription',
      date: new Date(),
      obs: 'validObs',
      suggested_value: '99.9'
    })
  })
 
  it('Should return an account on success', async () => {
    const userEvent = await sut.create({
      id_user: user.id,
      id_event: event.id,
      payment_value: 50
    })
    expect(userEvent).toBeTruthy()
    expect(userEvent.id_user).toBe(user.id)
    expect(userEvent.id_event).toBe(event.id)
    expect(userEvent.payment_value).toBe(50)
  })
  it('Should return a event', async () => {
    const userEvent = await sut.list(event.id)
    expect(userEvent).toBeTruthy()
  })
})
