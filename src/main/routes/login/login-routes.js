const { makeLoginController } = require('../../factories/login/login')
const { adaptRoute } = require('../../adapters/express-route-adapter')
 
module.exports = (route) => {
  route.post('/login', adaptRoute(makeLoginController())('handle'))
}
