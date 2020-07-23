const Sequelize = require('sequelize')
const dbConfig = require('../config')

const User = require('./User.model')
const Event = require('./Event.model')
const UserEvent = require('./UserEvent.model')

const models = [User, Event, UserEvent]

const database = new Sequelize(dbConfig)

models
  .map((model) => model.init(database))
  .map((model) => model.associate && model.associate(database.models))

module.exports = models
