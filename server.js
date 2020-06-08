const express = require('express')

const morgan = require('morgan')

const server = express()

const projectRouter = require('./projects/projectRouter')

const actionRouter =  require('./actions/actionsRouter')

server.use(morgan('combined'))

server.use(express.json)

server.use('/api/projects', projectRouter)

server.use('/api/actions', actionRouter)

module.exports = server