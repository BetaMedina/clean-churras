const { makeEventController } = require('../../factories/event/event')
const { makeListEventController } = require('../../factories/event/listEvent')
const { makeReadEventController } = require('../../factories/event/readEvent')
const { authMiddleware } = require('../../middlewares/authMiddleware')

const { adaptRoute } = require('../../adapters/express-route-adapter')
 
module.exports = (route) => {
  route.post('/event', authMiddleware, adaptRoute(makeEventController())('handle'))
  route.get('/event', authMiddleware, adaptRoute(makeListEventController())('handle'))
  route.get('/event/:id', authMiddleware, adaptRoute(makeReadEventController())('handle'))
}
