const express = require('express')
const Resource = require('./model')
const router = express.Router()


router.get('/', (req, res, next) => {
    Resource.getAll()
        .then((resources) => {
        res.status(200).json(resources);
        })
        .catch(next);
})

router.post('/', async (req, res, next) => {
    const newResource = await Resource.create(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch(next);

  return newResource;
})



module.exports = router
