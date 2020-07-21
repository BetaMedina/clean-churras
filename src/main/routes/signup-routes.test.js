const User = require('../../infra/db/mysql/models/User.model')
require('../../infra/db/mysql/models')
const app = require('../config/app')

const request = require('supertest')

describe('SignUp Routes', () => {
  afterAll(async () => {
    User.truncate()
  })

  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        email: 'Medina@mail.com',
        name: 'Medina',
        password: 'senhaLouca',
        passwordConfirm: 'senhaLouca'
      })
      .expect(200)
  })
})
