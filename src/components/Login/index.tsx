import Axios from 'axios';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

import FormModal from '../FormModal';
import './styles.css';

export default function Login() {
    const [user, setUser] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(true)
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [loginStatus, setLoginStatus] = useState('');

    const login = () => {
        if (user === "pessoa") {
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
        } if (user === "ong") {
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
        }
    }

    return (
        <> <AnimatePresence
            initial={true}
            exitBeforeEnter={false}
            onExitComplete={() => null}
        >
        { isModalOpen &&
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
            <form className='inputs'>
                <label>Email</label>
                <input type="email" onChange={(event) => (setEmail(event.target.value))} required/>

                <label>Senha</label>
                <input type="password" onChange={(event) => (setSenha(event.target.value))} required/>

                <button onClick={login}> Login </button>
            </form>
            <h2>{loginStatus}</h2>
        </div>  
    </>
    );
}