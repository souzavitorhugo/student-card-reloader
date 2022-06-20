const express = require('express');
const app = express();
const mysql = require("mysql"); 
const cors = require('cors');

const database = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projetotopicos'
})

app.use(cors());
// app.use(express.json())

app.get('/login', (req, res) => {
    let query = `SELECT * FROM usuarios`

    database.query(query, (err, result)=> {
        if (err) res.send(err)
        else { res.send(result)}
    })
})

app.listen('5000', () => {
    console.log('rodando servidor')
});

