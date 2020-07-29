const { makeUserController } = require('../../factories/user/findUser')
const { adaptRoute } = require('../../adapters/express-route-adapter')
 
module.exports = (route) => {
  route.post('/users', adaptRoute(makeUserController())('handle'))
}
