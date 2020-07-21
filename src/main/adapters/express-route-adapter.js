const adaptRoute = (controller) => {
  return async (req, res) => {
    const httpRequest = {
      body: req.body
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
module.exports = { adaptRoute }
