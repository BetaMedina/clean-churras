const { makeSignUpController } = require('../../factories/signup/signup')
const { adaptRoute } = require('../../adapters/express-route-adapter')
 
module.exports = (route) => {
  route.post('/signup', adaptRoute(makeSignUpController())('handle'))
}
