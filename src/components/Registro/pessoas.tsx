import React, { useState } from "react";
import Axios from "axios";
import './styles.css';

export default function PessoaRegistro() {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const registroPessoa = () => {
    Axios.post("http://localhost:3001/registroPessoa", {
      nome: nome,
      endereco: endereco,
      telefone: telefone,
      email: email,
      senha: senha
    }).then(() => {
      console.log('Cadastrado com sucesso!');
    });
  }

  return (
    <form className="Registro">
      <div className="inputs">
        <label>Nome</label>
        <input type="text" onChange={(event) => (setNome(event.target.value))} />

        <label>Endereço</label>
        <input type="text" onChange={(event) => (setEndereco(event.target.value))} />

        <label>Telefone</label>
        <input type="tel" onChange={(event) => (setTelefone(event.target.value))} />

        <label>Email</label>
        <input type="email" onChange={(event) => (setEmail(event.target.value))} />

        <label>Senha</label>
        <input type="password" id='Senha' onChange={(event) => (setSenha(event.target.value))} />

        <button type="submit" onClick={registroPessoa}> Registrar </button>
      </div>

    </form>
  );
}
