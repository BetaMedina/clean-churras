const { MongoHelper } = require('../../infra/db/mongo/helpers/mongo.helper')
const Users = require('../../infra/db/mysql/models/User-model')

const app = require('../config/app')

const request = require('supertest')

describe('SignUp Routes', () => {
  afterAll(async () => {
    Users.truncate()
  })

  beforeEach(async () => {
    Users.truncate()
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
