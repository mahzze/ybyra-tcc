import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Formulario from './components/Registro';
import Home from './components/Home/Home';
import "./components/Home/App.css";
import Login from './components/Login';
import LugarRegistro from './components/Registro/lugar';
import Lugares from './components/Lugares'
import PerfilOng from './components/Perfis/perfilong';
import PerfilUsuario from './components/Perfis/perfilusuario';
import Sair from './components/Login/sair';

const App = () => {
  const [user, setUser]: [string | null, any] = useState('');
  useEffect(() => setUser(sessionStorage.getItem('user')), [sessionStorage.getItem('user')]);

  return (

    < Router >
      <nav className="navbar navbar-light ps-4 pe-4">
        <section className="container">
          <Link className="navbar-brand mb-0 p-3" to='/'>Ybyrá</Link>

          <div className='Rbuttons'>
            <>
              {
                user !== 'ong' && user !== 'pessoa'
                  ? (
                    <>
                      <Link className='btn' to='/Registro' >Cadastrar-se</Link>
                      <Link className='btn' to='/Login'>Fazer Login</Link>
                    </>
                  )
                  : (
                    user === 'ong'
                      ? <>
                        <Link className='btn' to='/Lugares'>Lugares registrados</Link>
                        <Link className='btn' to='/PerfilOng'>Perfil</Link>
                        <Link className='btn' to='/Sair'>Sair</Link>
                      </>
                      : <>
                        <Link className='btn' to='/RegistroLugar'>Registrar Lugar</Link>
                        <Link className='btn' to='/PerfilUsuario'>Perfil</Link>
                        <Link className='btn' to='/Sair'>Sair</Link>
                      </>
                  )
              }
            </>
          </div>
        </section>

      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Registro' element={<Formulario />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/RegistroLugar' element={<LugarRegistro />} />
        <Route path='/Lugares' element={<Lugares />} />
        <Route path='/PerfilOng' element={<PerfilOng />} />
        <Route path='/PerfilUsuario' element={<PerfilUsuario />} />
        <Route path='/Sair' element={<Sair />} />
      </Routes>
    </Router >
  );
}

export default App;
