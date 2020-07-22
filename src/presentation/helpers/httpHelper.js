const { ServerError } = require('../errors')
const { UnauthorizedError } = require('../errors')

const badRequest = (error) => ({
  statusCode: 400,
  body: error
})
const success = (msg) => ({
  statusCode: 200,
  body: msg
})
const serverError = () => ({
  statusCode: 500,
  body: new ServerError()
})
const unauthorizedError = () => ({
  statusCode: 401,
  body: {
    error: new UnauthorizedError()
  }
})
module.exports = { badRequest, success, serverError, unauthorizedError }
