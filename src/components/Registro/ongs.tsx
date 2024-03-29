import { useState } from "react";
import Axios from "axios";
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export default function ONGRegistro() {
  const [nomeOng, setNomeOng] = useState("");
  const [enderecoOng, setEnderecoOng] = useState("");
  const [telefoneOng, setTelefoneOng] = useState("");
  const [emailOng, setEmailOng] = useState("");
  const [senhaOng, setSenhaOng] = useState("");

  const navigate = useNavigate();

  const registroOng = () => {
    Axios.post("http://localhost:3001/registroOng", {
      nomeOng: nomeOng,
      enderecoOng: enderecoOng,
      telefoneOng: telefoneOng,
      emailOng: emailOng,
      senhaOng: senhaOng
    }).then(() => {
      console.log('Cadastrado com sucesso!');
    });

    navigate('/Login');
      window.location.reload();
      <>
      <AnimatePresence
      initial={false}/>
      </>
  }

  return (
    <form className="Registro">
      <div className="inputs">
        <label>Nome da Organização</label>
        <input type="text" onChange={(event) => (setNomeOng(event.target.value))} />

        <label>Endereço</label>
        <input type="text" onChange={(event) => (setEnderecoOng(event.target.value))} />

        <label>Telefone</label>
        <input type="tel" onChange={(event) => (setTelefoneOng(event.target.value))} />

        <label>Email</label>
        <input type="email" onChange={(event) => (setEmailOng(event.target.value))} />

        <label>Senha</label>
        <input type="password" id='Senha' onChange={(event) => (setSenhaOng(event.target.value))} />

        <button type="submit" onClick={registroOng}> Registrar </button>
      </div>

    </form>
  );
}

