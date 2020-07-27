const { makeUserEventController } = require('../../factories/eventUser/eventUser')
const { makeDeleteUserEventController } = require('../../factories/eventUser/deleteEventUser')
const { adaptRoute } = require('../../adapters/express-route-adapter')
 
module.exports = (route) => {
  route.post('/user/event', adaptRoute(makeUserEventController())('handle'))
  route.delete('/user/event/:idUser/:idEvent', adaptRoute(makeDeleteUserEventController())('handle'))
}
