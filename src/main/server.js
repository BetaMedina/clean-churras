// const { MongoHelper } = require('../infra/db/mongo/helpers/mongo.helper')

const env = require('./config/env')
const app = require('./config/app')
// MongoHelper.connect(env.mongoUrl).then(async () => {
app.listen(env.port, () => {
  console.log(`Server is runing on port ${env.port}`)
})
// })
