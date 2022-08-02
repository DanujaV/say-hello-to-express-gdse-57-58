const express = require('express')
const app = express()
const port = 4000

app.use(express.json())

app.get('/', (req, res) => {
    console.log('get request comming!');
    res.send('get req came for / route')
})

app.post('/', (req, res) => {
    res.send('<h2>post request came for / route</h2>')
})

app.get('/customer', (req, res) => {
    console.log('customer get come');
    res.send('<h1>Customer get request came</h1>')
})

app.post('/customer', (req, res) => {
    console.log(req.body.id);
    res.send('customer post req came')
})

app.delete('/customer', (req, res) => {
    res.send('delete req came for customer')
})

app.listen(port, () => {
    console.log(`app starting on ${port}`);
})