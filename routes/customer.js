const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('customer get')
})

router.get('/customer-name', (req, res) => {
    res.send('customer-name request came')
})

router.post('/', (req, res) => {
    res.send('customer post')
})

module.exports = router