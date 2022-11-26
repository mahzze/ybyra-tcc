CREATE DATABASE IF NOT EXISTS ybyraDB;
USE ybyraDB;

CREATE TABLE ongs (
    id int primary key auto_increment,
    nomeOng varchar(100) not null,
    enderecoOng varchar(300) not null,
    telefoneOng varchar(11) not null,
    emailOng varchar(200) not null,
    senhaOng varchar(72) not null
);

CREATE TABLE usuarios (
    id int primary key auto_increment, 
    nome varchar(100) not null,
    endereco varchar(300) not null,
    telefone varchar(11) not null,
    email varchar(200) not null,
    senha varchar(72) not null
);

CREATE TABLE lugares (
    id int primary key auto_increment,
    usuarioEmail varchar(200) not null,
    logradouro varchar(250) not null,
    numero int not null, 
    qtdArvores int,
    ongSelecionada varchar(100),
    cep char(8)
);

INSERT INTO ongs (
  nomeOng,
  enderecoOng,
  telefoneOng,
  emailOng,
  senhaOng
) 
values (
  "ong",
  "teste",
  "12345678910",
  "ong@ong",
  "$2b$10$h/39iVnwY7Sesf55p1IlDOaC1P5GkU0UMfm2rz1dVLNYXw.0J85mu"
);

INSERT INTO usuarios (
  nome,
  endereco,
  telefone,
  email,
  senha
) 
values (
  "pes",
  "teste",
  "12345678910",
  "pes@pes",
  "$2b$10$xe64Wne6yK6cmT6exbR2HOecNsu.LbniTov3ui7slOhzsoId.0e7a"
);
