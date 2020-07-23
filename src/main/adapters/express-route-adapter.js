const adaptRoute = (controller) => (method) => {
  return async (req, res) => {
    const httpRequest = {
      body: req.body,
      params: req.params
    }
    const httpResponse = await controller[method](httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
module.exports = { adaptRoute }
