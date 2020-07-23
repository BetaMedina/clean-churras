require('../../../infra/db/mysql/models')
const User = require('../../../infra/db/mysql/models/User.model')
const Event = require('../../../infra/db/mysql/models/Event.model')
const UserEvent = require('../../../infra/db/mysql/models/UserEvent.model')
const app = require('../../config/app')

const request = require('supertest')
const mysqlHelper = require('../../../infra/db/mysql/helpers/mysql.helper')

let user
let event

describe('SignUp Routes', () => {
  beforeEach(async () => {
    await mysqlHelper.mysqlTruncate(User)

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
  afterEach(async () => {
    await mysqlHelper.mysqlTruncate(User)
    await mysqlHelper.mysqlTruncate(Event)

    await mysqlHelper.mysqlTruncate(UserEvent)
  })
  it('Should return an account on success', async () => {
    await request(app)
      .post('/user/event')
      .send({
        idUser: user.id,
        idEvent: event.id,
        payment_value: 22
      })
      .expect(200)
  })
  it('Should return  success', async () => {
    await request(app)
      .delete(`/user/event/${user.id}/${event.id}`)
      .expect(200)
  })
})
