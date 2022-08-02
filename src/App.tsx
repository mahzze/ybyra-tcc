import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Formulario from './components/Registro/Formulario';
import Home from './components/Home/Home';
import LoginOngs from './components/Login/Formulario/ongs';

export default function App() {
	return (
		<Router>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/Registro'>Registro</Link>
				<Link to='/Login'>Login</Link>
			</nav>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Registro' element={<Formulario />} />
				<Route path='/Login' element={<LoginOngs />} />
			</Routes>
		</Router>
	);
 }
