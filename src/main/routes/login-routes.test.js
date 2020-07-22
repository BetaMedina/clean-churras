const User = require('../../infra/db/mysql/models/User.model')
const { BcryptAdapter } = require('../../infra/criptography/bcrypt/bcrypt-adapter')

require('../../infra/db/mysql/models')
const app = require('../config/app')

const request = require('supertest')

describe('SignUp Routes', () => {
  beforeEach(async () => {
    await User.truncate()

    const bcrypt = new BcryptAdapter()
    const password = await bcrypt.encrypt('senhaLouca')

    await User.create({
      email: 'Medina@mail.com',
      password,
      name: 'medina'
    })
  })

  afterEach(async () => {
    await User.truncate()
  })

  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/login')
      .send({
        email: 'Medina@mail.com',
        password: 'senhaLouca'
      })
      .expect(200)
  })
})
