const { makeUserController } = require('../../factories/user/findUser')
const { adaptRoute } = require('../../adapters/express-route-adapter')
const { authMiddleware } = require('../../middlewares/authMiddleware')

module.exports = (route) => {
  route.post('/users', authMiddleware, adaptRoute(makeUserController())('handle'))
}
