const Sequelize = require('sequelize')
const dbConfig = require('../config/config')[process.env.NODE_ENV.trim()]

const User = require('./User.model')

const models = [User]

const database = new Sequelize(dbConfig)

models
  .map((model) => model.init(database))
  .map((model) => model.associate && model.associate(database.models))

module.exports = models
