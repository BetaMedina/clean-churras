class ServerError extends Error {
  constructor (paramName) {
    super('Internal Server Error')
    this.name = 'ServerError'
  }
}

module.exports = { ServerError }
