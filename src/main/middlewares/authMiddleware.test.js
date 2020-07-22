const app = require('../config/app')
const { JwtAdapter } = require('../../infra/criptography/jwt/jwt-adapter')
const request = require('supertest')
const { authMiddleware } = require('../middlewares/authMiddleware')

let jwtKey

describe('Content type middleware', () => {
  beforeEach(async () => {
    const sut = new JwtAdapter()
    jwtKey = await sut.encrypt(1)
  })
  test('Should return success on correct header is provided', async () => {
    app.get('/test-auth', authMiddleware, (req, res) => {
      res.send()
    })

    await request(app)
      .get('/test-auth')
      .set('access_token', `bearer ${jwtKey}`)
      .expect(200)
  })
})
