const express = require('express')

const Actions = require('../data/helpers/actionModel')

const router = express.Router()

router.get('/', (req, res) => {
    Actions.get()
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        res.status(500).json({error: 'There was an error gettig the actios'})
    })
})

router.get('/:id', (req, res) => {
    Actions.get(req.params.id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        res.status(500).json({message: 'There was an error getting the id'})
    })
})

router.post('/', (req, res) => {
    Actions.insert(req.body)
    .then(action => {
        res.status(201).jsonn(action)
    })
    .catch(err => {
        res.status(400).json({message: 'missing one of the required fields'})
    })
})

router.delete('/:id', (req, res) =>{
    Actions.remove(req.params.id)
    .then(action => {
        if (action) {
            res.status(200).json({message: 'action deleted'})
        } else {
            res.status(404).jsonn({message: 'couldnt find ID'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'server error deleting that action'})
    })
})

router.put('/:id', (req, res) => {
    Actions.update(req.params.id, req.body)
    .then(action => {
        if (action) {
            res.status(201).json(action)
        } else {
            res.status(400).json({message: 'missing one of the required fields'})
        }
    })
    .catch(err => {
        res.status(400).json({message: 'server error updating action '})
    })
}) 

module.exports = router