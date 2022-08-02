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
      console.log("Conectado!");
      db.query("SELECT IF( EXISTS( SELECT * FROM ongs WHERE emailOng = ? AND senhaOng = ?), 1, 0;", [emailOng, senhaOng],
       (err, result) => {
        if (err) throw err;
        reponse.send(result);
      });
    });
});

app.get('/loginPessoa', (request, response) => {
    const emailOng = request.body.emailOng;
    const senhaOng = request.body.senhaOng;

    db.connect((err) => {
      if (err) throw err;
      console.log("Conectado!");
      
      db.query("SELECT IF( EXISTS( SELECT * FROM ongs WHERE emailOng = ? AND senhaOng), as RESULT;",
       [emailOng, senhaOng], 
       (err, result) => {
        if (err) throw err;
        console.log(result);
      });
    });
});

app.listen(3001, () => {console.log('Servidor 3001')});