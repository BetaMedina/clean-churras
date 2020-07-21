const app = require('../config/app')

const request = require('supertest')

describe('Content type middleware', () => {
  test('Should return default content type as json', async () => {
    app.get('/test-content', (req, res) => {
      res.send()
    })

    await request(app)
      .get('/test-content')
      .expect('content-type', /json/)
  })
})
