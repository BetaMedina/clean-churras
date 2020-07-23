const Event = require('../../infra/db/mysql/models/Event.model')

require('../../infra/db/mysql/models')

const app = require('../config/app')

const request = require('supertest')

describe('Event Routes', () => {
  beforeEach(async () => {
    await Event.truncate()
  })

  afterEach(async () => {
    await Event.truncate()
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
