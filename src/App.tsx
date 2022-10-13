import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Formulario from './components/Registro';
import Home from './components/Home/Home';
import "./components/Home/App.css";
import Login from './components/Login';
import LugarRegistro from './components/Registro/lugar';
import Registros from './components/Registro/registros';


const App = () => {
  const [user, setUser]: [string | null, any] = useState('');
  useEffect(() => {
    return setUser(sessionStorage.getItem('user'))
  }, [sessionStorage.getItem('user')]);

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
                        <Link className='btn' to='/Registros'>Registros</Link>
                      </>
                      : <>
                        <Link className='btn' to='/RegistroLugar'>Registrar Lugar</Link>
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
        <Route path='/Registros' element={<Registros />} />
      </Routes>
    </Router >
  );
}

export default App;
