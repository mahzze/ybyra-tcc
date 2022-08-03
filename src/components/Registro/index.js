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
  const telefoneOng = request.body.telefoneOng;
  const emailOng = request.body.emailOng;
  const senhaOng = request.body.senhaOng;

  db.connect(function(err) {
    if (err) throw err;
    console.log("Conectado!");
    db.query("INSERT INTO ongs (nomeOng, enderecoOng, telefoneOng, emailOng, senhaOng) VALUES (?, ?, ?, ?, ?)",
      [nomeOng, enderecoOng, telefoneOng, emailOng, senhaOng], function (err, result) {
      if (err) throw err;
      console.log("Inserido");
    });
  });
});

app.post('/registroPessoa', (request, response) => {
  const nome = request.body.nome;
  const endereco = request.body.endereco;
  const telefone = request.body.telefone;
  const email = request.body.email;
  const senha = request.body.senha;

  db.connect((err) => {
    if (err) throw err;
    console.log("Conectado!");
    db.query("INSERT INTO usuarios (nome, endereco, telefone, email, senha) VALUES (?, ?, ?, ?, ?)",
     [nome, endereco, telefone, email, senha],
     (err, result) => {
      if (err) throw err;
      console.log("Inserido");
    });
  });
});

app.listen(3001, () => {console.log('Servidor 3001')});