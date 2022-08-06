import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Formulario from './components/Registro/Formulario';
import Home from './components/Home/Home';
import LoginOngs from './components/Login/Formulario/ongs';
import "./components/Home/App.css";

export default function App() {
	return (
		<Router>
			<nav className="navbar navbar-light bg-light ps-4 pe-4">
				<section className="container-fluid">
					<span className="navbar-brand mb-0 p-3">Ybyrá</span>

					<Link to='/'>Home</Link>
					<Link to='/Registro'>Registro</Link>
					<Link to='/Login'>Login</Link>
				</section>
				
			</nav>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Registro' element={<Formulario />} />
				<Route path='/Login' element={<LoginOngs />} />
			</Routes>
		</Router>
	);
 }
