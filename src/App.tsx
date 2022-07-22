import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Registro from './components/Registro/ong';
import Home from './components/Home/Home';

export default function App() {
	return (
		<Router>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/Registro'>Registro</Link>
			</nav>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Registro' element={<Registro />} />
			</Routes>
		</Router>
	);
 }
