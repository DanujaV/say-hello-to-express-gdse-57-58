const express = require('express');
const app = express();

const port = 4000;

// if we use json obejct inside our app.js
app.use(express.json());

app.get('/', (req, res) => {
    console.log('Get Request has come')
    res.send('Hello world!')
})

app.get('/customer', (req, res) => {
    console.log(req.body)
    res.send('Hello Customer')
})

app.get('/customer/:id', (req, res) => {
    console.log(req.params);
})

app.get('/customer', (req, res) => {
    console.log(req.params.id);
})

app.listen(port, (req, res) => {
    console.log(`Express app listening on port ${port}`);
})