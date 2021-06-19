const mysql = require('mysql')
const express = require('express')
const router = express.Router();
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pasarsenin"
})

con.connect(function (err) {
    if (err) throw err
})

// router.get('/', function (req, res) {
//     res.send('<form method="post" action="/todo"><input id="todo" name="todo" style="margin-right:10px;"><input type="submit"></form>')
// })

router.post('/', function (req, res) {
    console.log(req.body)
    const sql = "INSERT INTO todo(todo) VALUES('" + req.body.todo + "')"
    con.query(sql, function (err) {
        if (err) throw err
        console.log("1 record inserted")
    })
    res.end()
})

router.delete('/:id', function (req, res) {
    const sql = "DELETE FROM todo WHERE id = " + req.params.id
    con.query(sql, function (err) {
        if (err) throw err
        console.log("1 record deleted")
    })
    res.end()
})

router.get('/', function (req, res) {
    const sql = "SELECT * FROM todo"
    con.query(sql, function (err, result) {
        if (err) throw err
        // res.send(result.map(item => "<div>" + item.task + "</div>").join(""))
        res.send(result)
    })
})

module.exports = router