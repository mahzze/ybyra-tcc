import Axios from 'axios';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';


import FormModal from '../../FormModal';
import './styles.css';

export default function Login() {
    const [user, setUser] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(true)
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const [login, setLogin] = useState([]);

    const LOGON = (user: string) => {
        if(user === '') return null;
        setUser(user[0].toUpperCase() + user.slice(1))
        
        Axios.get(`http://localhost:3001/login${user}`).then((response) => {
        setLogin(response.data);
        });
        console.log(login)
    }

    return (
        <>
            <AnimatePresence
                initial={true}
                exitBeforeEnter={true}
                onExitComplete={() => null }
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
             <div className="d-flex">
                <div className="login">
                    <form className="inputs">
                        <label>Email</label>
                        <input type="email" onChange={(event) => (setEmail(event.target.value))} required/>

                        <label>Senha</label>
                        <input type="password" onChange={(event) => (setSenha(event.target.value))} required/>

                        <button onClick={()=> LOGON(user)}> Login </button>
                    </form>
                </div>
            </div>   
        </>
    );
}