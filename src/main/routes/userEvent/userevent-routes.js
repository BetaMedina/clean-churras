const { makeUserEventController } = require('../../factories/eventUser/eventUser')
const { makeDeleteUserEventController } = require('../../factories/eventUser/deleteEventUser')
const { makeListUserEventController } = require('../../factories/eventUser/listEventUser')
const { adaptRoute } = require('../../adapters/express-route-adapter')
 
module.exports = (route) => {
  route.post('/user/event', adaptRoute(makeUserEventController())('handle'))
  route.get('/user/event/:id', adaptRoute(makeListUserEventController())('handle'))
  route.post('/user/events', adaptRoute(makeDeleteUserEventController())('handle'))
}
