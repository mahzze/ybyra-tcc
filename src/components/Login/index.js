const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    rost: 'localhost',
    password: '',
    database: 'ybyraDB'
});

app.get('/loginOng', (request, response) => {
    const emailOng = request.body.emailOng;
    const senhaOng = request.body.senhaOng;
     
    db.connect((err) => {
      if (err) throw err;
      let query = `SELECT * FROM ongs WHERE emailOng = ${emailOng}  AND senhaOng = ${senhaOng}`
      db.query( query, 
       (err, result) => {
        if (err) throw err;
        response.send(result);
      });
    });
    sessionStorage.setItem("user","ong");
});

app.get('/loginPessoa', (request, response) => {
    const email = request.body.email;
    const senha = request.body.senha;

    db.connect((err) => {
      if (err) throw err;
      console.log("Conectado!");
      
      db.query("SELECT IF( EXISTS( SELECT * FROM usuarios WHERE email = ? AND senha), as RESULT;",
       [email, senha], 
       (err, result) => {
        if (err) throw err;
        console.log(result);
      });
    });
    sessionStorage.setItem("user","pessoa");
});

app.listen(3001, () => {console.log('Servidor 3001')});