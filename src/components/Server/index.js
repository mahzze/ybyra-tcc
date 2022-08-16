const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    rost: 'localhost',
    password: '',
    database: 'ybyraDB'
});

app.post('/loginOng', (request, response) => {
    const emailOng = request.body.emailOng;
    const senhaOng = request.body.senhaOng;
  
    let query = `SELECT * FROM ongs WHERE emailOng = ? AND senhaOng = ?;`;
    db.query(query, 
      [emailOng, senhaOng],
      (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
          response.send(result);
        } else {
          response.send({message: "wrong user/password combination"});
        }
      });
});

app.post('/loginPessoa', (request, response) => {
  const email = request.body.email;
  const senha = request.body.senha;
  
  let query = `SELECT * FROM usuarios WHERE email = ? AND senha = ?;`;
  db.query( query, [email, senha],
    (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        response.send(result);
      } else {
        response.send({message: "wrong user/password combination"})
      }
    });
});

app.post('/registroOng', (request, response) => {
  const nomeOng = request.body.nomeOng;
  const enderecoOng = request.body.enderecoOng;
  const telefoneOng = request.body.telefoneOng;
  const emailOng = request.body.emailOng;
  const senhaOng = request.body.senhaOng;

  db.connect(function(err) {
    if (err) throw err;

    db.query("INSERT INTO ongs (nomeOng, enderecoOng, telefoneOng, emailOng, senhaOng) VALUES (?, ?, ?, ?, ?)",
      [nomeOng, enderecoOng, telefoneOng, emailOng, senhaOng],
      (err, result) => {
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

  db.connect(function(err) {
    if (err) throw err;

    db.query("INSERT INTO usuarios (nome, endereco, telefone, email, senha) VALUES (?, ?, ?, ?, ?)",
      [nome, endereco, telefone, email, senha],
      (err, result) => {
      if (err) throw err;
      console.log("Inserido");
    });
  });
});

app.listen(3001, () => {console.log('Servidor 3001')});