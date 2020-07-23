const User = require('../../infra/db/mysql/models/User.model')
const { BcryptAdapter } = require('../../infra/criptography/bcrypt/bcrypt-adapter')

require('../../infra/db/mysql/models')
const app = require('../config/app')

const request = require('supertest')
const mysqlHelper = require('../../infra/db/mysql/helpers/mysql.helper')

describe('SignUp Routes', () => {
  beforeEach(async () => {
    await mysqlHelper.mysqlTruncate(User)
    const bcrypt = new BcryptAdapter()

    const password = await bcrypt.encrypt('senhaLouca')

    await User.create({
      email: 'validMail2@mail.com',
      password,
      name: 'medina'
    })
  })

  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/login')
      .send({
        email: 'validMail2@mail.com',
        password: 'senhaLouca'
      })
      .expect(200)
  })
})
