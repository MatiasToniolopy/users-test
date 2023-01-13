const router =  require('express').Router()
const User = require('../models/Users.js')
const api = require('../utils/fetchapi')

router.get('/data', async (req, res) => {
    const data = await api()
    res.send('Data agregada a la base de datos')
})

router.get('/', async (req, res) => {
    try {
        const users = await User.find().exec()
        res.json(users)
    } catch (error) {
        res.json({message: error.message})
    }
})

router.get('/search', async (req, res) => {
    try {
        const {name} = req.query
        const user = await User.find({name: { $regex: `${name}`, $options:'i' }})
        res.json(user)
    } catch (error) {
        res.json({message: error.message})
    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const user = await User.findById({_id: id})
        res.json(user)
    } catch (error) {
        res.json({message: error.message})
    }
})

router.post('/', async (req, res) => {
    const {name, username, email} = req.body
    try {
        const newUser = await User.create({name, username, email})
        newUser.save()
        res.send(newUser)
    } catch (error) {
        res.json({message: error.message})
    }
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const user = await User.findOneAndDelete({_id: id})
        res.json(user)
    } catch (error) {
        res.json({message: error.message})
    }
})

router.put('/:id', async(req, res) => {
    try {
        const {id} = req.params
        const user = await User.findByIdAndUpdate({_id: id}, {$set: req.body}, {new: true})
        res.json(user)
    } catch (error) {
        res.json({message: error.message})
    }

})

module.exports = router;