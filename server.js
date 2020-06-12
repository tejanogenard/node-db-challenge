const express = require('express')
const helmet = require('helmet')
const server = express()

const projectRouter = require('./projects /projectsRouter')
const resourcesRouter = require('./projects /resources/resourcesRouter')


server.use(helmet())
server.use(express.json())

server.use('/api/projects', projectRouter)
server.use('/api/resources', resourcesRouter)

module.exports = server