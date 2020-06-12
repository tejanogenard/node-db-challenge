const express = require('express')

const model = require('./projectsModel.js')

const router = express.Router()


router.get('/', (req, res) => {
    model.getProjects()
    .then(projects => {
        res.status(200).json({projects})
    })
    .catch(err => {
        res.status(500).json({ message: 'cannot get projects', err})
    })
})

router.post('/', (req, res) => {
    model.addProject(req.body)
    .then(project => {
        res.status(201).json({project})
    })
    .catch(err => {
        res.status(500).json({ message: 'cannot create a new project', err})
    })
})


router.post('/:id/tasks', (req, res) => {
    const { id } = req.params;
    const tasks= req.body;
    tasks.project_id = id;

    model.addTask(tasks)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(err => {
        res.status(500).json({ message: 'cannot create new task.', err })
    })
})

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;

    model.getTasks(id)
    .then(tasks => {
        res.status(201).json(tasks)
    })
    .catch(err => {
        res.status(500).json({ message: 'cannot get tasks.', err })
    })
})




module.exports = router