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
    cep char(8)
);
