const User = require('../../infra/db/mysql/models/User.model')
require('../../infra/db/mysql/models')
const app = require('../config/app')

const request = require('supertest')
const mysqlHelper = require('../../infra/db/mysql/helpers/mysql.helper')

describe('SignUp Routes', () => {
  beforeEach(async () => {
    await mysqlHelper.mysqlTruncate(User)
  })
  afterEach(async () => {
    await mysqlHelper.mysqlTruncate(User)
  })

  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        email: 'validMail@mail.com',
        name: 'Medina',
        password: 'senhaLouca',
        passwordConfirm: 'senhaLouca'
      })
      .expect(200)
  })
})
