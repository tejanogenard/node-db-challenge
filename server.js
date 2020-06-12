const express = require('express')
const helmet = require('helmet')

const projectRouter = require('./prodjects/projectsRouter')
const tasksRouter = require('./prodjects/tasks/tasksRouter')
const resourcesRouter = require('./prodjects /resources/resourcesRouter')

server.use('/api/projects', projectRouter)
server.use('/api/tasks', tasksRouter)
server.use('/api/resources', resourcesRouter)

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})