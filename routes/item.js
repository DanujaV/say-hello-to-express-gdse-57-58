const express = require('express')
const app = express()
const router = express.Router()

const Item = require('../models/item.models')

app.use(express.json())

router.get('/', async (req, res) => {
    try {
        const items = await Item.find()
        res.send(items)
    } catch (err) {
        res.send('Err: ' + err)
    }
})

router.post('/', async(req, res) => {
    const item = new Item({
        code: req.body.code,
        description: req.body.description,
        price: req.body.price,
        qty: req.body.qty
    })

    try {
        const response = await item.save()
        res.send(response)
    } catch(err) {
        res.send('Err: ' + err)
    }
})

router.delete('/', (req, res) => {
    res.send(req.query.id)
})

module.exports = router