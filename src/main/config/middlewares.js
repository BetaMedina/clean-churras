const { contentType, expressJson, cors } = require('../middlewares')
module.exports = (app) => {
  app.use(expressJson)
  app.use(cors)
  app.use(contentType)
}
