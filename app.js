const express = require('express');
const app = express();

const port = 4000;

app.get('/', (req, res) => {
    console.log('Get Request has come')
    res.send('Hello world!')
})

app.get('/customer', (req, res) => {
    res.send('Hello Customer')
})

app.listen(port, (req, res) => {
    console.log(`Express app listening on port ${port}`);
})