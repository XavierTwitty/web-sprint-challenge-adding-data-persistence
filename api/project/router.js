const express = require('express')
const Project = require('./model')
const router = express.Router()


router.get('/', (req, res, next) => {
    Project.getAll()
        .then((project) => {
        res.status(200).json(project);
        })
        .catch(next);
})

router.post('/', async (req, res, next) => {
    const newProject = await Project.create(req.body)
        .then((project) => {
        res.status(201).json(project);
        })

        .catch(next);

  return newProject;
})

module.exports = router
