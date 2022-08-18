const express = require('express')
const app = express()
const router = express.Router()

const Item = require('../models/item.models')

app.use(express.json())

router.get('/', async (req, res) => {
    try {
        const items = await Item.find()
        // res.send(items)
        res.json(items)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id)
        res.json(item)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

router.post('/', async (req, res) => {
    const item = new Item({
        code: req.body.code,
        description: req.body.description,
        price: req.body.price,
        qty: req.body.qty
    })

    try {
        const response = await item.save()
        // res.send(response)
        res.json(response)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id)
        const response = await item.remove()

        res.json(response)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id)
        item.code = req.body.code
        item.description = req.body.description
        item.price = req.body.price
        item.qty = req.body.qty

        const response = await item.save()
        res.json(response)

    } catch (err) {
        res.send('Err: ' + err)
    }
})

module.exports = router