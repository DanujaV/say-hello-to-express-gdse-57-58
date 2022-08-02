const express = require('express')
const app = express()
const router = express.Router()

app.use(express.json())

router.get('/', (req, res) => {
    res.send('item get all')
})

router.post('/', (req, res) => {
    res.send(req.body)
})

router.delete('/', (req, res) => {
    res.send(req.query.id)
})

module.exports = router