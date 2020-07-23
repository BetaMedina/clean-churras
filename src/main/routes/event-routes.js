const { makeEventController } = require('../factories/event')
const { adaptRoute } = require('../adapters/express-route-adapter')
 
module.exports = (route) => {
  route.post('/event', adaptRoute(makeEventController()))
}
