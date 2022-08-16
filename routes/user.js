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
            // if (err) throw err;
            // console.log(result); // 
            // console.log("table created");
            if (result.warningCount === 0) {
                console.log("User table created!");
            }
        })
    }
})

router.get('/', (req, res) => {
    var query = "SELECT * FROM users";
    connection.query(query, (err, rows) => {
        if (err) console.log(err)
        res.send(rows)
    })
})

router.post('/', (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const username = req.body.username

    var query = "INSERT INTO users (id, name, username) VALUES (?, ?, ?)";

    connection.query(query, [id, name, username], (err) => {
        if (err) {
            res.send({ 'message': 'duplicate entry' })
        } else {
            res.send({ 'message': 'user created!' })
        }
    })

})

router.put('/', (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const username = req.body.username

    var query = "UPDATE users SET name=?, username=? WHERE id=?";

    connection.query(query, [name, username, id], (err, rows) => {
        if (err) console.log(err);

        if (rows.affectedRows > 0) {
            res.send({ 'message': 'user updated' })
        } else {
            res.send({ 'message': 'user not found' })
        }
        // res.send(rows)
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id

    var query = "DELETE FROM users WHERE id=?";

    connection.query(query, [id], (err, rows) => {
        if (err) console.log(err);

        if (rows.affectedRows > 0) {
            res.send({ 'message': 'user deleted' })
        } else {
            res.send({ 'message': 'user not found' })
        }
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    var query = "SELECT * from users WHERE id=?";

    connection.query(query, [id], (err, row) => {
        if(err) console.log(err);

        res.send(row)
    })
})


module.exports = router