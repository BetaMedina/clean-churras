const { makeUserEventController } = require('../factories/eventUser')
const { adaptRoute } = require('../adapters/express-route-adapter')
 
module.exports = (route) => {
  route.post('/user/event', adaptRoute(makeUserEventController())('handle'))
  route.delete('/user/event/:idUser/:idEvent', adaptRoute(makeUserEventController())('delete'))
}
