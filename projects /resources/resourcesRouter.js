const express = require('express')

const model = require('./resourcesModel.js')

const router = express.Router();

router.get('/', (req, res) => {
    model.getResources()
    .then(resources => {
        res.status(200).json({resources});
    })
    .catch(err => {
        res.status(500).json({ message: 'cannot get resources.', err })
    })
})

router.post('/', (req, res) => {
    model.addResource(req.body)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(err => {
        res.status(500).json({ message: 'cannot add resource'})
    })
})

module.exports = router