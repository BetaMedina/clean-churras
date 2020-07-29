const { makeUserEventController } = require('../../factories/eventUser/eventUser')
const { makeDeleteUserEventController } = require('../../factories/eventUser/deleteEventUser')
const { makeListUserEventController } = require('../../factories/eventUser/listEventUser')
const { adaptRoute } = require('../../adapters/express-route-adapter')
const { authMiddleware } = require('../../middlewares/authMiddleware')

module.exports = (route) => {
  route.post('/user/event', authMiddleware, adaptRoute(makeUserEventController())('handle'))
  route.get('/user/event/:id', authMiddleware, adaptRoute(makeListUserEventController())('handle'))
  route.post('/user/events', authMiddleware, adaptRoute(makeDeleteUserEventController())('handle'))
}
