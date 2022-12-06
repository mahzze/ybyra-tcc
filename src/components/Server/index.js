const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const { ALL } = require('dns');
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
  }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: 'usuarioId',
    secret: 'subscribe',
    resave: false,
    saveUnintialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    }
  }));

const db = mysql.createConnection({
  user: 'root',
  rost: 'localhost',
  password: '',
  database: 'ybyraDB'
});

app.get('/login', (request, response) => {
  if (request.session.usuario) {
    response.send({
      loggedIn: true,
      usuario: request.session.usuario,
      userType: request.session.userType
    });
  } else {
    response.send({ loggedIn: false });
  }
});

app.post('/loginOng', (request, res) => {
  const emailOng = request.body.emailOng;
  const senhaOng = request.body.senhaOng;

  let query = `SELECT * FROM ongs WHERE emailOng = ?;`;
  db.query(query, [emailOng],
    (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        bcrypt.compare(senhaOng, result[0].senhaOng, (error, response) => {
          if (response) {
            request.session.usuario = result;
            request.session.userType = "ong";
            res.send(result);
          } else {
            // confere o banco de dados, deve estar com o campo de senhas menor do que o certo (o certo é de 72 pra cima)
            res.send({ message: 'wrong combination' });
          }
        });
      } else {
        res.send({ message: 'wrong user/password combination' });
      }
    });
});

app.post('/loginPessoa', (request, res) => {
  const email = request.body.email;
  const senha = request.body.senha;

  let query = `SELECT * FROM usuarios WHERE email = ?;`;
  db.query(query, [email],
    (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        bcrypt.compare(senha, result[0].senha, (error, response) => {
          if (error) throw error;
          if (response) {
            request.session.usuario = result;
            request.session.userType = "pessoa";
            res.send(result);
          } else {
            res.send({ message: 'wrong combination' })
          }
        })
      } else {
        res.send({ message: "wrong user/password combination" })
      }
    });
});

app.post('/registroOng', (request, response) => {
  const nomeOng = request.body.nomeOng;
  const enderecoOng = request.body.enderecoOng;
  const telefoneOng = request.body.telefoneOng;
  const emailOng = request.body.emailOng;
  const senhaOng = request.body.senhaOng;

  bcrypt.hash(senhaOng, saltRounds, (err, hash) => {
    if (err) throw err;

    db.query(`INSERT INTO ongs (nomeOng, enderecoOng, telefoneOng, emailOng, senhaOng) VALUES (?, ?, ?, ?, ?)`,
      [nomeOng, enderecoOng, telefoneOng, emailOng, hash],
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

  bcrypt.hash(senha, saltRounds, (err, hash) => {
    if (err) throw err;
    let query = `INSERT INTO usuarios (nome, endereco, telefone, email, senha) VALUES (?, ?, ?, ?, ?)`;
    db.query(query, [nome, endereco, telefone, email, hash],
      (err, result) => {
        if (err) throw err;
      });
  });
});

app.post('/registroLugar', (request) => {
  const logradouro = request.body.logradouro;
  const numero = parseInt(request.body.numero);
  const cep = request.body.cep;
  const email = request.body.email;

  let query = `INSERT INTO lugares (logradouro, numero, cep, usuarioEmail) VALUES (?, ?, ?, ?)`;
  db.query(query, [logradouro, numero, cep, email],
    (err, result) => {
      if (err) throw err;
      console.log(result);
    });
});

app.get('/showLugares', (request, response) => {
  // let query = "select logradouro, numero, arvoresPlantadas, ongSelecionada, cep from lugares";

  // db.query(query), (error, result) => {
  //   if (error) throw error;
  // console.log("foi100%")
  // SAMPLE DE DADOS PARA TESTAR FRONT-END, TROCAR PELOS DADOS DO BANCO DE DADOS
  response.send({
    regs: [
      { logradouro: "testeAceitar", numero: 7442, ongSelecionada: null, arvoresPlantadas: null, cep: "03535000" },
      { logradouro: "testeFinalizar", numero: 284, ongSelecionada: "teste", arvoresPlantadas: null, cep: "03535000" },
      { logradouro: "testeConcluida", numero: 500, ongSelecionada: "teste", arvoresPlantadas: 163, cep: "03535000" },
    ]
  });
  // }
})

/* A: ACHO ESSE AQUI MEIO DESNECESSÁRIO
*  M: É que to fazendo do jeito que eu tinha proposto inicialmente
*  Não faz sentido o usuário comum decidir a quantidade de árvores
*  Isso é trabalho das ONGs. Also: coisa que poderia ser feita pra melhorar isso aqui é colocar
*  o nome do usuario na sessionStorage, pra aparecer o nome e não o email da ong que aceitar
*  mas no momento tem coisa mais urgente pra ser feita
*/
app.post('/aceitar', (request) => {
  let query = "UPDATE lugares SET ongSelecionada = ? WHERE logradouro = ? AND numero = ?";
  let logradouro = request.body.logradouro;
  let numero = parseInt(request.body.numero);
  let ong = request.body.ong;

  db.query(query, [ong, logradouro, numero], (err, result) => {
    if (err) throw err;
    console.log("local aceito: ", result)
  })
})

app.post('/finalizar', (request) => {
  let query = "UPDATE lugares SET arvoresPlantadas = ? WHERE logradouro = ? AND numero = ?";
  let logradouro = request.body.logradouro;
  let numero = parseInt(request.body.numero);
  let arvoresPlantadas = request.body.arvoresPlantadas;

  db.query(query, [arvoresPlantadas, logradouro, numero],
    (err, result) => {
      if (err) throw err
      console.log(result)
    })
})

app.post('/cancelar', (request) => {
  let query = "DELETE FROM lugares WHERE logradouro = ? AND numero = ?"
  let lugar = request.body.logradouro
  let numero = parseInt(request.body.numero)

  db.query(query, [lugar, numero],
    (err, result) => {
      if (err) throw err;
      console.log(result)
    });
})

app.get('/contar', (request, response) => {
  let query = "SELECT SUM(arvoresPlantadas) FROM lugares";

  db.query(query), (err, result) => {
    if (err) throw err;
    response.send(result);
  }
})

app.listen(3001, () => { console.log('Servidor 3001') });
