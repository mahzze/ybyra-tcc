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

app.post('/registroOng', (request, response) => {
    const nomeOng = request.body.nomeOng;
    const enderecoOng = request.body.enderecoOng;
    const telefoneOng = Number(request.body.telefoneOng);
    const emailOng = request.body.emailOng;
    const senhaOng = request.body.senhaOng;

    db.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      db.query("INSERT INTO ongs (nomeOng, enderecoOng, telefoneOng, emailOng, senhaOng) VALUES (?, ?, ?, ?, ?)", [nomeOng, enderecoOng, telefoneOng, emailOng, senhaOng], function (err, result) {
        if (err) throw err;
        console.log("Inserted");
      });
    });
});

app.listen(3000, () => {console.log('Servidor 3000')});