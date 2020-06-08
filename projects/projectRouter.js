const express = require('express')

const Projects = require('../data/helpers/projectModel')

const router = express.Router()

router.get('/', (req , res) => {
    Projects.get()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({error: 'server error getting projects'})
    })
})

router.get('/:id', (req, res) => {
    Projects.get(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({message: 'server error getting ID'})
    })
})

router.get('/:id/actions')

router.delete('/:id', (req, res) =>{
    Projects.remove(req.params.id)
    .then(project => {
        if (project) {
            res.status(200).json({message: 'deleted project'})
        } else {
            res.status(404).json({message: 'couldnt delete project'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'server error deleting project'})
    })
})

router.put('/:id',(req , res) => {
    Projects.update(req.params.id, req.body)
    .then(project => {
        if (projecet) {
            res.status(201).json(project)
        } else {
            res.status(404).json({message: 'missing one of the required fields'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'server error updating data'})
    })

})