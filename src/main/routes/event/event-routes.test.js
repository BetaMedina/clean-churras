const Event = require('../../../infra/db/mysql/models/Event.model')

require('../../../infra/db/mysql/models')

const app = require('../../config/app')

const request = require('supertest')
const mysqlHelper = require('../../../infra/db/mysql/helpers/mysql.helper')

describe('Event Routes', () => {
  afterAll(async () => {
    await mysqlHelper.mysqlTruncate(Event)
  })
  
  test('Should return an event on success', async () => {
    await request(app)
      .post('/api/event')
      .send({
        name: 'validName',
        description: 'validDescription',
        date: new Date(),
        obs: 'validObs',
        suggestedValue: '99.9'
      })
      .expect(200)
  })
})
