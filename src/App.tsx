import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Formulario from './components/Registro';
import Home from './components/Home/Home';
import "./components/Home/App.css";
import Login from './components/Login';

const App = () => {

	const user = sessionStorage.getItem("user")
	return (
		<Router>
			<nav className="navbar navbar-light ps-4 pe-4">
				<section className="container">
					<Link className="navbar-brand mb-0 p-3" to='/'>Ybyrá</Link>

				<div className='Rbuttons'>
					<>
						{
							user === null ? (
								<>
									<Link className='btn' to='/Registro' >Cadastrar-se</Link>
									<Link className='btn' to='/Login'>Fazer Login</Link>
								</>
							)
							: (
								user === 'ong'
									? <Link className='btn' to='/ong'>Página da ong</Link>
									: <Link className='btn' to='/pessoa'>Página da pessoa</Link>
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
				<Route path='/pessoa' element={<Home />} />
				<Route path='/ong' element={<Home />} />
			</Routes>
		</Router >
	);
}

export default App;