const app = require('../config/app')

const request = require('supertest')

describe('BodyParser middleware', () => {
  test('Should verify body as json', async () => {
    app.post('/test-parser', (req, res) => {
      res.send({ name: req.body.name })
    })

    await request(app)
      .post('/test-parser')
      .send({ name: 'teste' })
      .expect({ name: 'teste' })
  })
})
