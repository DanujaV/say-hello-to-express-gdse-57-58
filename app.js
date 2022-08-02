const express = require('express')
const customer = require('./routes/customer')
const item = require('./routes/item')
const app = express()
const port = 4000

app.use(express.json())
app.use('/customer', customer)
app.use('/item',  item)

app.get('/', (req, res) => {
    console.log('get request comming!');
    res.send('get req came for / route')
})

// app.post('/', (req, res) => {
//     res.send('<h2>post request came for / route</h2>')
// })

// app.get('/customer', (req, res) => {
//     console.log('customer get come');
//     res.send('<h1>Customer get request came</h1>')
// })

// app.post('/customer', (req, res) => {
//     console.log(req.body.id);
//     res.send('customer post req came')
// })

// app.delete('/customer', (req, res) => {
//     console.log(req.query.id);
//     res.send('delete req came for customer')
// })

// app.get('/cart', (req, res) => {
//     res.send('cart get request')
// })

// app.post('/cart', (req, res) => {
//     res.send('cart')
// })

app.listen(port, () => {
    console.log(`app starting on ${port}`);
})