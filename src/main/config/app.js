const express = require('express')
require('../../infra/db/mysql/models/index')

const Middlewares = require('./middlewares')
const SetupRoutes = require('./routes')

const app = express()

Middlewares(app)
SetupRoutes(app)

module.exports = app 
