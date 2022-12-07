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
  let query = "select logradouro, numero, arvoresPlantadas, ongSelecionada, cep from lugares";
  let sqlQuery = db.query(query)
  var arr = new Array()

  sqlQuery.on('result', (row) => {
    let data = JSON.parse(JSON.stringify(row))
    arr.push(data)
  })

  sqlQuery.on('end', () => {
    return response.send({ regs: arr })
  })
})

app.post('/aceitar', (request, response) => {
  let query = "UPDATE lugares SET ongSelecionada = ? WHERE logradouro = ? AND numero = ?";
  let logradouro = request.body.logradouro;
  let numero = parseInt(request.body.numero);
  let ong = request.body.ong;

  db.query(query, [ong, logradouro, numero])

})

app.post('/finalizar', (request, response) => {
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

app.post('/cancelar', (request, response) => {
  let query = "DELETE FROM lugares WHERE logradouro = ? AND numero = ?"
  let lugar = request.body.logradouro
  let numero = parseInt(request.body.numero)

  db.query(query, [lugar, numero],
    (err, result) => {
      if (err) throw err;
    });
})

app.get('/contar', (request, response) => {
  let query = "SELECT SUM(arvoresPlantadas) FROM lugares WHERE arvoresPlantadas > 0";
  let count = 0;

  // codigo abaixo não ta indo
  let sqlQuery = db.query(query)
  sqlQuery.on('end', (row) => {
    console.log(row)
    return response.send(JSON.parse(JSON.stringify(row)))
  })
  //     let data = JSON.parse(JSON.stringify(row))
  //     console.log(data)
  //     count += data.arvoresPlantadas
  //   })
  //   sqlQuery.on('end', response.send(count))
})

app.listen(3001, () => { console.log('Servidor 3001') });
