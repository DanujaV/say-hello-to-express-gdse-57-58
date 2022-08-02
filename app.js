const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    console.log('get request comming!');
    res.send('get req came for / route')
})

app.get('/customer', (req, res) => {
    console.log('customer get come');
    res.send('<h1>Customer get req came</h1>')
})

app.listen(port, () => {
    console.log(`app starting on ${port}`);
})