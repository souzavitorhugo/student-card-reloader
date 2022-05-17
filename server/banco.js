const Express = require('express');
const app = Express();
const mysql = require('mysql2');
const Sequelize = require('sequelize');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projetotopicos'
});

// app.listen(3001, ()=> {
//     console.log('rodando servidor')
// })

// app.get("/", (req, res) => {
//     let query = "SELECT * FROM usuarios"

//     db.query(query, (err, result) => {
//         console.log(result)
//         console.log(err)
//     })
// })

const sequelize = new Sequelize('projetotopicos', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('Conexao realizada com sucesso')
}).catch((err) => {
    console.log('Erro ao conectar' + err)
})