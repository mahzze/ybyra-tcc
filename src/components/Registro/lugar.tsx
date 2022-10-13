import React, { useState } from "react";
import Axios from "axios";
import './styles.css';

export default function LugarRegistro() {
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [cep, setCep] = useState("");

  const registroLugar = () => {
    Axios.post("http://localhost:3001/registroLugar", {
      logradouro: logradouro,
      numero: numero,
      cep: cep,
      email: sessionStorage.getItem('email')
    }).then(() => {
      console.log('Cadastrado com sucesso!');
    });
  }

  return (
    <form className="Registro">
      <div className="inputs">
        <label>Logradouro</label>
        <input type="text" onChange={(event) => (setLogradouro(event.target.value))} required />

        <label>Número</label>
        <input type="text" onChange={(event) => (setNumero(event.target.value))} required />

        <label>CEP</label>
        <input type="text" onChange={(event) => (setCep(event.target.value))} required />

        <button type="submit" onClick={registroLugar}> Registrar </button>
      </div>
    </form>
  );
}

