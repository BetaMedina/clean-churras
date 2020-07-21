const { Router } = require('express')
const fg = require('fast-glob')

module.exports = (app) => {
  const router = Router()
  app.use(router)
  app.use('/api', router)
  fg.sync('**/src/main/routes/**routes.js').forEach(file => {
    const importFile = require(`../../../${file}`)
    importFile(router)
  })
}
