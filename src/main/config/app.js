const express = require('express')
const Middlewares = require('./middlewares')
const SetupRoutes = require('./routes')

const app = express()

Middlewares(app)
SetupRoutes(app)

module.exports = app 
