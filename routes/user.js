const express = require('express')
const mysql = require('mysql')
const db = require('../configs/db.configs')
const router = express.Router()

const connection = mysql.createConnection(db.database)

connection.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to the MySQL server');
        var userTableQuery = "CREATE TABLE IF NOT EXISTS users (id VARCHAR(255) PRIMARY KEY, name VARCHAR(255), username VARCHAR(255))"
        connection.query(userTableQuery, function (err, result) {
            if (err) throw err;
            // console.log(result);
            if (result.warningCount === 0) {
                console.log("User table created!");
            }
        })
    }
})

router.get('/', (req, res) => {
    res.send('user get')
})

router.post('/', (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const username = req.body.username
    
    var query = "INSERT INTO users (id, name, username) VALUES (?, ?, ?)";

    connection.query(query, [id, name, username], (err) => {
        if(err) {
            res.send({'message' : 'duplicate entry'})
        } else {
            res.send({'message' : 'user created!' })
        }
    })

})

router.put('/', (req, res) => {
    res.send('put method')
})

router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    res.send('delete method')
})

router.get('/:id', (req, res) => {
    res.send('get user by id')
})

//put
//delete    -> id
//get user by id

module.exports = router