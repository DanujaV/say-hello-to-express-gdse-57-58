const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('user get')
})

router.post('/', (req, res) => {
    res.send('user post method')
})

//put
//delete    -> id
//get user by id

module.exports = router