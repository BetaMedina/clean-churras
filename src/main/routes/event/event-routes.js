const { makeEventController } = require('../../factories/event/event')
const { makeListEventController } = require('../../factories/event/listEvent')
const { makeReadEventController } = require('../../factories/event/readEvent')

const { adaptRoute } = require('../../adapters/express-route-adapter')
 
module.exports = (route) => {
  route.post('/event', adaptRoute(makeEventController())('handle'))
  route.get('/event', adaptRoute(makeListEventController())('handle'))
  route.get('/event/:id', adaptRoute(makeReadEventController())('handle'))
}
