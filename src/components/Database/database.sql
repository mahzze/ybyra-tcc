CREATE DATABASE IF NOT EXISTS ybyraDB;
USE ybyraDB;

CREATE TABLE ongs (
    id int primary key auto_increment,
    nomeOng varchar(100) not null,
    enderecoOng varchar(300) not null,
    telefoneOng int not null,
    emailOng varchar(200) not null,
    senhaOng varchar(25) not null
);

CREATE TABLE usuarios (
    id int primary key auto_increment,
    nome varchar(100) not null,
    endereco varchar(300) not null,
    telefone int not null,
    email varchar(200) not null,
    senha varchar(25) not null
);

CREATE TABLE lugaresConsideração (
    id int primary key auto_increment,
    logradouro varchar(250) not null,
    numero int not null, 
    cep int
);