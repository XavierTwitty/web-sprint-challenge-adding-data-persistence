const express = require('express')
const Task = require('./model')
const router = express.Router()

router.get('/', (req, res, next) => {
    Task.getAll()
    .then((task) => {
      res.status(200).json(task);
    })
    .catch(next);
})

router.post('/', async (req, res, next) => {
    const newTask = await Task.create(req.body)
    .then((task) => {
      res.status(201).json(task)
    })
    .catch(next)
   
    return newTask
})


module.exports = router
