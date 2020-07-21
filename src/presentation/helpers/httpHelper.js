const { ServerError } = require('../errors')

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

module.exports = { badRequest, success, serverError }
