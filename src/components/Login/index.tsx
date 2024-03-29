import Axios from 'axios';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FormModal from '../FormModal';
import './styles.css';

export default function Login() {
  const [user, setUser] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(true)

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [loginStatus, setLoginStatus] = useState('');

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  const login = () => {
    if (user === "pessoa") {
      sessionStorage.setItem('user', 'pessoa');
      sessionStorage.setItem('email', email);
      Axios.post("http://localhost:3001/loginPessoa", {
        email: email,
        senha: senha
      }).then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].nome);
        }
      });

      navigate('/RegistroLugar');
      window.location.reload();
      <>
        <AnimatePresence
          initial={false} />
      </>
    }

    if (user === "ong") {
      sessionStorage.setItem('user', 'ong');
      sessionStorage.setItem('email', email);
      Axios.post("http://localhost:3001/loginOng", {
        emailOng: email,
        senhaOng: senha
      }).then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].nomeOng);
        }
      });

      navigate('/Lugares');
      window.location.reload();
      <>
        <AnimatePresence
          initial={false} />
      </>
    }
  }

  useEffect(() => {
    Axios.get('http://localhost:3001/login').then((response) => {
      if (response.data.loggedIn === true) {
        if (response.data.userType === "ong") {
          setLoginStatus(response.data.usuario[0].emailOng);
        }
        if (response.data.userType === "pessoa") {
          setLoginStatus(response.data.usuario[0].email);
        }
      }
    });
  }, []);

  return (
    <>
      <AnimatePresence
        initial={true}
        exitBeforeEnter={false}
        onExitComplete={() => null}
      >
        {isModalOpen &&
          <FormModal
            text='Tipo de usuário'
            isOpen={isModalOpen}
            close={() => setIsModalOpen(false)}
            user={user}
            setUser={setUser}
          />
        }
      </AnimatePresence>

      <div className="login">

        <label>Email</label>
        <input type="email" onChange={(event) => (setEmail(event.target.value))} required />

        <label>Senha</label>
        <input type="password" onChange={(event) => (setSenha(event.target.value))} required />

        <button onClick={login}> Login </button>

      </div>
    </>
  );
}
