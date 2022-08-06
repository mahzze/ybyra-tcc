import Axios from 'axios';
import React, { useState } from 'react';
import './styles.css';

export default function LoginOngs() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const loginOng = () => {
        
    }

    return (
        <div className="Login">
            <div className="inputs">
                <label>Email</label>
                <input type="email" onChange={(event) => (setEmail(event.target.value))} />

                <label>Senha</label>
                <input type="email" onChange={(event) => (setSenha(event.target.value))} />

                <button type="submit" onClick={loginOng}> Login </button>
            </div>
    </div>
    )
}