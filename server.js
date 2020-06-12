const express = require('express')
const helmet = require('helmet')
const server = express()

const projectRouter = require('./prodjects/projectsRouter')
const tasksRouter = require('./prodjects/tasks/tasksRouter')
const resourcesRouter = require('./prodjects /resources/resourcesRouter')


server.use(helmet())
server.use(express.json())

server.use('/api/projects', projectRouter)
server.use('/api/tasks', tasksRouter)
server.use('/api/resources', resourcesRouter)

module.exports = server