const { InvalidParamError } = require('./invalidParamError')
const { MissingParamError } = require('./missingParamError')
const { ServerError } = require('./serverError')
const { UnauthorizedError } = require('./unauthorized')

module.exports = {
  InvalidParamError,
  MissingParamError,
  ServerError,
  UnauthorizedError
}
